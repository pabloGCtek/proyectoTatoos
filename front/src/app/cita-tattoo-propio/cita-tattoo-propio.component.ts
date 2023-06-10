import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cita } from '../clases/Cita';
import { ArtistasService } from '../servicios/artistas.service';
import { CitasService } from '../servicios/citas.service';
import { GalleryService } from '../servicios/gallery.service';
import { LocalStorageService } from '../servicios/local-storage.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { Tattoo } from '../clases/Tattoo';
import { ImagenAStringService } from '../servicios/imagen-astring.service';

@Component({
  selector: 'app-cita-tattoo-propio',
  templateUrl: './cita-tattoo-propio.component.html',
  styleUrls: ['./cita-tattoo-propio.component.css']
})
export class CitaTattooPropioComponent {
  formularioCita: FormGroup;
  turno: number=0;
  horasDisponibles: string[];

  //obtencion de la fecha actual
  fecha_actual:string = new Date().toISOString().split('T')[0];

  constructor(private servicioGaleria: GalleryService, private artistaServicio: ArtistasService,
    private usuarioServicio: UsuariosService, private citaServicio:CitasService,
    private localStorage:LocalStorageService, private imagenServicio: ImagenAStringService) {
    this.formularioCita = new FormGroup({
      tamano: new FormControl(''),
      descripcion: new FormControl(''),
      fecha_cita: new FormControl('', [Validators.required, this.validarFecha]),
      hora_cita: new FormControl(''),
      imagen: new FormControl('')
    });

    this.horasDisponibles = this.getHorasDisponibles('pequeño');
  }
  arrayCitas:Cita[] = [];
  ngOnInit(){
    this.citaServicio.obtenerTodasCitas().subscribe(data => {this.arrayCitas=data});
  }

  //Metodo para cambiar las horas disponibles a elegir en funcion del tamaño
  cambiarHora() {
    const tamano = this.formularioCita.get('tamano')?.value;
    this.horasDisponibles = this.getHorasDisponibles(tamano);
  }

  getHorasDisponibles(tamano: string): string[] {
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

  generarHorasDisponibles(horaInicio: number, horaFin: number, intervalo: number): string[] {
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

  file:File
  tattoo:Tattoo = new Tattoo();

  //metodo para cambiar el formato de la imagen a uno que acepte la BBDD
  handleFileInput(event:Event){
    const target= event.target as HTMLInputElement
    this.file = (target.files as FileList)[0]
    this.imagenServicio.getBase64(this.file).then(data=>this.tattoo.imagen = data)
  }

  registrarCita(){
    // Verifica si la cita ya existe
    let citaExistente = this.verificarCitaExistente();
    if(citaExistente){
      alert("Lo sentimos, ya existe una cita en esa hora y dia. Por favor, elige otra.");
    }
    else{
      // Continúa con el registro de la cita
    // ...

    if (this.formularioCita.get('tamano')?.value == 'pequeño') {

      if(this.formularioCita.get('hora_cita')?.value === "08:00"){
        this.turno=1;
      }
      else if(this.formularioCita.get('hora_cita')?.value === "10:00"){
        this.turno=2;
      }
      else if(this.formularioCita.get('hora_cita')?.value === "14:00"){
        this.turno=3;
      }

    }
    else if (this.formularioCita.get('tamano')?.value === 'mediano') {
      if(this.formularioCita.get('hora_cita')?.value === '10:00'){
        this.turno=2;
      }
      else if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        this.turno=3;
      }
    }
    else if (this.formularioCita.get('tamano')?.value === 'grande') {
      if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        this.turno=3;
      }
    }

    const cita = new Cita();

    // Generar un número entero aleatorio entre 5 y 8 (ambos incluidos). Estos son los id de los tatuadores en BBDD
    const IDartista = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
    // Obtener los valores del artista desde el servicio
    this.artistaServicio.mostrarArtista().subscribe(
      artistas => {
        const artistaEncontrado = artistas.find(a => a.idArtista == IDartista);
        if (artistaEncontrado) {
          cita.artistaCita = artistaEncontrado;
  
          // Crear el objeto Tattoo
          
          this.tattoo.artista = artistaEncontrado
          this.tattoo.nombre = "";
          this.tattoo.descripcion = this.formularioCita.get('descripcion')?.value;
          this.tattoo.lugar = "";
          this.tattoo.tamano = this.formularioCita.get('tamano')?.value;
          this.tattoo.tattooPropio = true;
          if (this.tattoo.tamano === "pequeño") {
            this.tattoo.precio = 50;
          } else if (this.tattoo.tamano === "mediano") {
            this.tattoo.precio = 200;
          } else if (this.tattoo.tamano === "grande") {
            this.tattoo.precio = 400;
          }

          // Insertar tatuaje
          this.imagenServicio.insertarTattoo(this.tattoo).subscribe(data => {
        
          // Crear la cita
          this.servicioGaleria.encontrarUltimoTattoo().subscribe(data => {cita.tattoo=data
          cita.usuarioCita = this.localStorage.usuarioLogeado(),
          cita.fecha = this.formularioCita.get('fecha_cita')?.value,
          cita.turno = this.turno,
          this.citaServicio.insert(cita).subscribe(data => {});}
        );
        });
        }
      }
    );
    }
    
  }


  verificarCitaExistente() :boolean {
    const fechaCita = this.formularioCita.get('fecha_cita')?.value;
    let turnoAux: number = 0;
  
    // Asigna el valor correcto a `turnoAux` según el tamaño y la hora de la cita
    if (this.formularioCita.get('tamano')?.value == 'pequeño') {

      if(this.formularioCita.get('hora_cita')?.value === "08:00"){
        turnoAux=1;
      }
      else if(this.formularioCita.get('hora_cita')?.value === "10:00"){
        turnoAux=2;
      }
      else if(this.formularioCita.get('hora_cita')?.value === "14:00"){
        turnoAux=3;
      }

    }
    else if (this.formularioCita.get('tamano')?.value === 'mediano') {
      if(this.formularioCita.get('hora_cita')?.value === '10:00'){
        turnoAux=2;
      }
      else if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        turnoAux=3;
      }
    }
    else if (this.formularioCita.get('tamano')?.value === 'grande') {
      if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        turnoAux=3;
      }
    }
    // Verifica si la cita ya existe en arrayCitas
    let coincidenciaEncontrada = false;
    for(let i = 0; i < this.arrayCitas.length; i++){
      const fecha = new Date(this.arrayCitas[i].fecha);
      const year = fecha.getFullYear();
      const month = fecha.getMonth() + 1;
      const day = fecha.getDate();
      const fechaFormateada = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      if(fechaFormateada === fechaCita && this.arrayCitas[i].turno === turnoAux){
        // alert("COINCIDEN arraycita.fecha: " + fechaFormateada + " turno" + this.arrayCitas[i].turno
        // + "\nformulariocita: " + fechaCita + "formularioturno: " + turnoAux)
        coincidenciaEncontrada = true;
        break;
      }
    }
    return coincidenciaEncontrada;
  }
  
}
