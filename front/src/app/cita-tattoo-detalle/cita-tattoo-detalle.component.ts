import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Artista } from '../clases/Artista';
import { Tattoo } from '../clases/Tattoo';
import { Usuario } from '../clases/Usuario';
import { Cita } from '../clases/Cita';
import { GalleryService } from '../servicios/gallery.service';
import { ArtistasService } from '../servicios/artistas.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalStorageService } from '../servicios/local-storage.service';
import { CitasService } from '../servicios/citas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-cita-tattoo-detalle',
  templateUrl: './cita-tattoo-detalle.component.html',
  styleUrls: ['./cita-tattoo-detalle.component.css']
})
export class CitaTattooDetalleComponent {
  formularioCita: FormGroup;
  turno: number=0;
  horasDisponibles: string[];
  imagen:string="";
  tattooSeleccionado:boolean=false;
  idTatuador=0;
  idTattoo:number;
  tattoN:Tattoo
  tamano:string
  artista: Artista
  //Filtros
  tattoos: Tattoo[]=[]
  artistas:Artista[]=[]
  idArtista: number;
  tattooFiltrado: Tattoo[]=[]
  usuario:Usuario=this.localStorage.usuarioLogeado()

  //obtencion de la fecha actual probando
  fecha_actual:string = new Date().toISOString().split('T')[0];
    constructor(private servicioGaleria: GalleryService,
    private route: Router,
    private citaServicio:CitasService,
    private localStorage: LocalStorageService,
    private activarRuta: ActivatedRoute) {
    this.activarRuta.params.subscribe(info=>
      { this.idTattoo=this.activarRuta.snapshot.params['id']
        this.servicioGaleria.obtenerPorId(info['id']).subscribe(info2=>{
          this.tattoN=info2
          this.formularioCita= new FormGroup({
              tamano: new FormControl({ value: this.tattoN.tamano, disabled: true }),
              tatuador: new FormControl({ value: this.tattoN.artista.nombre, disabled: true }),
              tatuaje: new FormControl({ value: this.tattoN.nombre, disabled: true }),
              fecha_cita: new FormControl('', [Validators.required, this.validarFecha]),
              hora_cita: new FormControl(''),
              lugar:new FormControl({ value: this.tattoN.lugar, disabled: true }),
              precio: new FormControl({ value: this.tattoN.precio, disabled: true })
             })
          }
            )
        });


  }

    ngOnInit() {

  }
  //Metodo para cambiar las horas disponibles a elegir en funcion del tamaño
  cambiarHora() {
    const tamano = this.tattoN.tamano
    this.horasDisponibles = this.getHorasDisponibles(tamano);
}
// metodo para obtener el turno segun horas seleccionadas
  private getHorasDisponibles(tamano: string): string[] {
    let horas: string[];

    if (tamano == 'Pequeño') {
      horas = this.generarHorasDisponibles(8, 12, 2).concat(this.generarHorasDisponibles(14, 16, 2));
    }
    else if (tamano == 'Mediano') {
      horas = this.generarHorasDisponibles(10, 14, 4).concat(this.generarHorasDisponibles(14, 18, 4));
    }
    else if (tamano == 'Grande') {
      this.turno = 3;
      horas = this.generarHorasDisponibles(14, 20, 6);
    }
    else {
      horas = [];
    }

    return horas;
  }

  private generarHorasDisponibles(horaInicio: number, horaFin: number, intervalo: number): string[] {
    const horas: string[] = [];
    let horaActual = horaInicio;

    while (horaActual < horaFin) {
      const horaFormateada = this.formatearHora(horaActual);
      horas.push(horaFormateada);
      horaActual += intervalo;
    }

    return horas;
  }

  private formatearHora(hora: number): string {
    return hora.toString().padStart(2, '0') + ':00';
  }

  //Desactivar dias de la semana
  validarFecha(control: FormControl): { [key: string]: any } | null {
    const fechaSeleccionada = new Date(control.value);
    const diaSeleccionado = fechaSeleccionada.getDay();

    if (diaSeleccionado === 6) { // 6 representa el sábado (domingo es 0)
      return { sabadoInvalido: true };
    }

    return null;
  }

  registrarCita() {
    if (this.formularioCita.get('tamano')?.value === 'Pequeño') {
      if (this.formularioCita.get('hora_cita')?.value === '08:00') {
        this.turno = 1;
      } else if (this.formularioCita.get('hora_cita')?.value === '10:00') {
        this.turno = 2;
      } else if (this.formularioCita.get('hora_cita')?.value === '14:00') {
        this.turno = 3;
      }
    } else if (this.formularioCita.get('tamano')?.value === 'Mediano') {
      if (this.formularioCita.get('hora_cita')?.value === '10:00') {
        this.turno = 2;
      } else if (this.formularioCita.get('hora_cita')?.value === '14:00') {
        this.turno = 3;
      }
    } else if (this.formularioCita.get('tamano')?.value === 'Grande') {
      if (this.formularioCita.get('hora_cita')?.value === '14:00') {
        this.turno = 3;
      }
    }
    const cita: Cita= new Cita
    cita.fecha=this.formularioCita.get("fecha_cita")?.value
    cita.turno=this.turno
    cita.usuarioCita=this.usuario
    cita.artistaCita=this.tattoN.artista
    cita.tattoo=this.tattoN
    this.citaServicio.insert(cita).subscribe(dato=>
      console.log(dato));
      alert("fecha:"+cita.fecha+" turno "+cita.turno+" cliente "+cita.usuarioCita.nombre+" tattoo "+cita.tattoo.nombre+" del artista: "+cita.artistaCita.nombre)
      this.route.navigateByUrl('/detalle-cita')
    }

}
