import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GalleryService } from '../servicios/gallery.service';
import { ArtistasService } from '../servicios/artistas.service';
import { Artista } from '../clases/Artista';
import { Tattoo } from '../clases/Tattoo';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { Cita } from '../clases/Cita';
import { CitasService } from '../servicios/citas.service';
import { LocalStorageService } from '../servicios/local-storage.service';

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
  idTatuador=0;

  
  //obtencion de la fecha actual
  fecha_actual:string = new Date().toISOString().split('T')[0];

  constructor(private servicioGaleria: GalleryService, private artistaServicio: ArtistasService,
    private usuarioServicio: UsuariosService, private citaServicio:CitasService, private localStorage:LocalStorageService) {
    this.formularioCita = new FormGroup({
      tamano: new FormControl('', Validators.required),
      tatuador: new FormControl('', Validators.required),
      tatuaje: new FormControl('', Validators.required),
      fecha_cita: new FormControl('', [Validators.required, this.validarFecha]),
      hora_cita: new FormControl('', Validators.required)
    });

    this.horasDisponibles = this.getHorasDisponibles('pequeño');

  }

  //Metodo para cambiar los tatuajes en funcion del tatuador
  cambiarTatuajesTatuador(){
    if(this.formularioCita.get("tatuador")?.value ==='Ana'){
      this.idTatuador=0;
    }
    else if(this.formularioCita.get("tatuador")?.value === 'Tony'){
      this.idTatuador=1;
    }
    else if(this.formularioCita.get("tatuador")?.value === 'Carmela'){
      this.idTatuador=2;
    }
    else if(this.formularioCita.get("tatuador")?.value === 'José'){
      this.idTatuador=3;
    }
    this.filtrarPorArtista(this.idTatuador);
  }
  //Metodo para cambiar los tatuajes en funcion del tamaño
  cambiarTatuajesTamano(){
    if(this.formularioCita.get("tamano")?.value ==='pequeño'){
    }
    else if(this.formularioCita.get("tamano")?.value === 'mediano'){
    }
    else if(this.formularioCita.get("tamano")?.value === 'grande'){
    }
    this.filtrarPorTamano(this.formularioCita.get("tamano")?.value);
  }
  //Metodo para cambiar las horas disponibles a elegir en funcion del tamaño
  cambiarHora() {
    const tamano = this.formularioCita.get('tamano')?.value;
    this.horasDisponibles = this.getHorasDisponibles(tamano);
  }
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
      const horaFormateada = horaActual.toString().padStart(2, '0') + ':00';
      horas.push(horaFormateada);
      horaActual += intervalo;
    }

    return horas;
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
    //Cambiar el turno en funcion de la hora elegida
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
  
    const cita = new Cita();
  
    // Obtener los valores del artista desde el servicio
    const nombreArtista = this.formularioCita.get('tatuador')?.value;
    this.artistaServicio.mostrarArtista().subscribe(
      artistas => {
        const artistaEncontrado = artistas.find(a => a.nombre == nombreArtista);
        if (artistaEncontrado) {
          alert("Hace asignacion");
          cita.artistaCita = artistaEncontrado;
          // Alerta para la asignación del artista
          alert("Asignación de artista completada");
          // Resto del código...
          // Obtener los tatuajes filtrados desde la base de datos
          this.servicioGaleria.mostrarTatto().subscribe(
            (tatuajes: Tattoo[]) => {
              // Filtrar los tatuajes por nombre
              const tattooFiltrado = tatuajes.filter(tatuaje => tatuaje.nombre == this.formularioCita.get('tatuaje')?.value);
  
              // Verificar si se encontró un tatuaje
              if (tattooFiltrado.length > 0) {
                const tatuajeSeleccionado = tattooFiltrado[0];
  
                // Obtener el resto de los atributos del tatuaje desde la base de datos
                this.servicioGaleria.obtenerPorId(tatuajeSeleccionado.idTattoo).subscribe(
                  (tattooObtenido: Tattoo) => {
                    cita.tattoo = tattooObtenido; // Asignación de tattoo a la cita
                    // Alerta para la asignación del tatuaje
                    alert("Asignación de tatuaje completada");
                    // Resto del código...
                    this.usuarioServicio.inicioSesion('Juan', '1234');
                    cita.usuarioCita = this.localStorage.usuarioLogeado();
                    cita.fecha = this.formularioCita.get('fecha_cita')?.value;
                    cita.turno = this.turno;
                    this.citaServicio.insert(cita).subscribe(data => {alert(data);});
                    alert("artistaCita: " + cita.artistaCita + "\nturno: " + cita.turno + "\ntattoo: " + cita.tattoo +
                      "\nfecha: " + cita.fecha + "\nusuario: " + cita.usuarioCita.email);
                    alert("artistaCita.nombre: " + cita.artistaCita.nombre);
                  }
                );
              }
            }
          );
        } else {
          alert("Artista no encontrado");
        }
      },
    );
  }
  
  //Para mostrar una foto del tatuaje seleccionado y su precio
  imagenTatuajeSeleccionado: String;
  precioTatuajeSeleccionado: number;

  seleccionarTatuaje() {
    this.tattooSeleccionado = true;
    const tatuajeSeleccionadoNombre = this.formularioCita.get('tatuaje')?.value;

    //Recorrer los tatuajes filtrados e igualar al nombre para obtener su imagen
    for(let i=0;i<=this.tattooFiltrado.length;i++){
      if(this.tattooFiltrado[i].nombre==tatuajeSeleccionadoNombre){
        this.imagenTatuajeSeleccionado=this.tattooFiltrado[i].imagen
        this.precioTatuajeSeleccionado=this.tattooFiltrado[i].precio
      }
    }
  }

  //Filtros
  tattoos: Tattoo[]=[]
  artistas:Artista[]=[]
  idArtista: number;
  tattooFiltrado: Tattoo[]=[]
  usuario:Usuario;
  ngOnInit() {
    // this.id=this.activarRuta.snapshot.params["id"]
    // this.tattoServicio.obtenerPorId(this.id).subscribe(dato=>{
    //   this.tattoN=dato
    //   this.tamano=this.tattoN.tamano
    //   this.imagen=this.tattoN.imagen
    //   this.artista=this.tattoN.artista})
    this.mostrarTodos();
    this.mostrarArtistas();
    this.usuarioServicio.inicioSesion('Juan','1234').subscribe(data => this.usuario = data)
  }
  
  mostrarTodos(): void{
    this.servicioGaleria.mostrarTatto().subscribe(data=>this.tattoos=data)
   }
   mostrarArtistas():void{
     this.artistaServicio.mostrarArtista().subscribe(data=>{this.artistas=data
     this.tattooFiltrado=data[0].tattoos})
   }
   filtrarTodos(){
     this.tattooFiltrado=this.tattoos
   }
   filtrarPorArtista(id: number){
     this.tattooFiltrado=this.artistas[id].tattoos
   }
   filtrarPorTamano(tamano: string){
    this.tattooFiltrado=this.filtrarArray(tamano, this.idTatuador);
   }
   filtrarArray(tamano: string, idArtista: number) : Tattoo[]{
    
    let arrayAux:Tattoo[]=[];
    for(let i=0;i<this.artistas[idArtista].tattoos.length;i++){
      if(this.artistas[idArtista].tattoos[i].tamano==tamano){
        arrayAux.push(this.artistas[idArtista].tattoos[i]);
      }
    }
    return arrayAux;
  }

  formCompleto:boolean = false;
  //Funcion que deshabilita el boton hasta que estén todos los campos rellenos
  formularioCompleto(): boolean {
    if (this.formCompleto) {
      return (
        this.formularioCita.get('tatuador')?.value &&
        this.formularioCita.get('tamano')?.value &&
        this.formularioCita.get('tatuaje')?.value &&
        this.formularioCita.get('fecha_cita')?.value &&
        this.formularioCita.get('hora_cita')?.value
      );
    } else {
      return (
        this.formularioCita.get('tatuador')?.value &&
        this.formularioCita.get('tamano')?.value &&
        this.formularioCita.get('tatuaje')?.value &&
        this.formularioCita.get('fecha_cita')?.value &&
        this.formularioCita.get('hora_cita')?.value
      );
    }
  }
}
