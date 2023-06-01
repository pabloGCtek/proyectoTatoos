import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GalleryService } from '../gallery.service';
import { ActivatedRoute } from '@angular/router';
import { Tattoo } from '../clases/Tattoo';
import { Artista } from '../clases/Artista';

@Component({
  selector: 'app-cita-tattoo-artista',
  templateUrl: './cita-tattoo-artista.component.html',
  styleUrls: ['./cita-tattoo-artista.component.css']
})
export class CitaTattooArtistaComponent {
  formularioCita: FormGroup;
  turno: number=0;
  horasDisponibles: string[];
  imagen:string="";
  tattooSeleccionado:boolean=false;
  id:number;
  tattoN: Tattoo;
  artista: Artista;
  tamano:string;
  //obtencion de la fecha actual
  fecha_actual:string = new Date().toISOString().split('T')[0];

  constructor(private tattoServicio:GalleryService,
    private activarRuta: ActivatedRoute) {
    this.formularioCita = new FormGroup({
      tamano: new FormControl(''),
      tatuador: new FormControl(''),
      tatuaje: new FormControl(''),
      fecha_cita: new FormControl(''),
      hora_cita: new FormControl('')
    });

    this.horasDisponibles = this.getHorasDisponibles('pequeño');

  }
  ngOnInit()
  {
    this.id=this.activarRuta.snapshot.params["id"]
    this.tattoServicio.obtenerPorId(this.id).subscribe(dato=>{
      this.tattoN=dato
      this.tamano=this.tattoN.tamano
      this.imagen=this.tattoN.imagen
      this.artista=this.tattoN.artista})
  }

  //Metodo para cambiar las horas disponibles a elegir en funcion del tamaño
  cambiarHora() {
    const tamano = this.formularioCita.get('tamano')?.value;
    this.horasDisponibles = this.getHorasDisponibles(tamano);
  }

  private getHorasDisponibles(tamano: string): string[] {
    let horas: string[];

    if (tamano == 'pequeño') {
      horas = this.generarHorasDisponibles(8, 12, 2).concat(this.generarHorasDisponibles(14, 16, 2));
    }
    else if (tamano == 'mediano') {
      horas = this.generarHorasDisponibles(10, 14, 4).concat(this.generarHorasDisponibles(14, 18, 4));
    }
    else if (tamano == 'grande') {
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

  registrarCita(){
    alert("El valor de la hora es:" + this.formularioCita.get('hora_cita')?.value);

    if (this.formularioCita.get('tamano')?.value == 'pequeño') {

      if(this.formularioCita.get('hora_cita')?.value === "08:00"){
        this.turno=1;
        alert("tatu pequeño a las 8, turno :" + this.turno);
      }
      else if(this.formularioCita.get('hora_cita')?.value === "10:00"){
        this.turno=2;
        alert("tatu pequeño a las 10, turno :" + this.turno);
      }
      else if(this.formularioCita.get('hora_cita')?.value === "14:00"){
        this.turno=3;
        alert("tatu pequeño a las 14, turno :" + this.turno);
      }

    }
    else if (this.formularioCita.get('tamano')?.value === 'mediano') {
      if(this.formularioCita.get('hora_cita')?.value === '10:00'){
        this.turno=2;
        alert("tatu mediano a las 10, turno :" + this.turno);
      }
      else if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        this.turno=3;
        alert("tatu mediano a las 14, turno :" + this.turno);
      }
    }
    else if (this.formularioCita.get('tamano')?.value === 'grande') {
      if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        this.turno=3;
        alert("tatu grande a las 14, turno :" + this.turno);
      }
    }
  }
  seleccionarTatuaje() {
    this.tattooSeleccionado = true;
  }
}
