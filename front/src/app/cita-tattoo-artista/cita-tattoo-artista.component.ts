import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cita } from '../clases/Cita';
import { GalleryService } from '../servicios/gallery.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalStorageService } from '../servicios/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistasService } from '../servicios/artistas.service';
import { Artista } from '../clases/Artista';
import { Tattoo } from '../clases/Tattoo';
import { Usuario } from '../clases/Usuario'
import { CitasService } from '../servicios/citas.service';

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
  idTattoo:number;
  tattoN:Tattoo


  //obtencion de la fecha actual 
  fecha_actual:string = new Date().toISOString().split('T')[0];

  constructor(private servicioGaleria: GalleryService,
    private artistaServicio: ArtistasService,
    private usuarioServicio: UsuariosService,
    private citaServicio:CitasService,
    private localStorage: LocalStorageService,
    private router: Router) {
    this.formularioCita = new FormGroup({
      tamano: new FormControl('', Validators.required),
      tatuador: new FormControl('', Validators.required),
      tatuaje: new FormControl('', Validators.required),
      fecha_cita: new FormControl('', [Validators.required, this.validarFecha]),
      hora_cita: new FormControl('', Validators.required)
    });

    this.horasDisponibles = this.getHorasDisponibles('pequeño');

  }
  arrayCitas:Cita[] = [];
  ngOnInit() {
    this.mostrarTodos();
    this.mostrarArtistas();
    this.citaServicio.obtenerTodasCitas().subscribe(data => {this.arrayCitas=data});
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
    // Verifica si la cita ya existe
    let citaExistente = this.verificarCitaExistente();
    if(citaExistente){
      alert("Lo sentimos, ya existe una cita en esa hora y dia. Por favor, elige otra.");
    }
    else{
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
    const artista = new Artista();

    // Obtener los valores del artista desde el servicio
    const nombreArtista = this.formularioCita.get('tatuador')?.value;
    this.artistaServicio.mostrarArtista().subscribe(
      artistas => {
        const artistaEncontrado = artistas.find(a => a.nombre == nombreArtista);
        if (artistaEncontrado) {
          cita.artistaCita = artistaEncontrado;
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
                    this.usuarioServicio.inicioSesion('Juan', '1234');
                    cita.usuarioCita = this.localStorage.usuarioLogeado();
                    cita.fecha = this.formularioCita.get('fecha_cita')?.value;
                    cita.turno = this.turno;
                    this.citaServicio.insert(cita).subscribe(data => {});
                    this.router.navigateByUrl('/detalle-cita');
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

  mostrarTodos(): void{
    this.servicioGaleria.mostrarTatto().subscribe(data=>{this.tattoos=data
      // condicion para que no muestre los tatuajes subidos por usuarios asignados a ese tatuador
    for (let i = this.tattooFiltrado.length - 1; i >= 0; i--) {
      if (this.tattooFiltrado[i].tattooPropio) {
        alert("Tatuaje propio encontrado: " + this.tattooFiltrado[i].nombre);
        this.tattooFiltrado.splice(i, 1);
      }
    }
    })
    
    
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
    // condicion para que no muestre los tatuajes subidos por usuarios asignados a ese tatuador
    for (let i = this.tattooFiltrado.length - 1; i >= 0; i--) {
      if (this.tattooFiltrado[i].tattooPropio) {
        alert("Tatuaje propio encontrado: " + this.tattooFiltrado[i].nombre);
        this.tattooFiltrado.splice(i, 1);
      }
    }
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

  verificarCitaExistente() :boolean {
    const fechaCita = this.formularioCita.get('fecha_cita')?.value;
    let turnoAux: number = 0;
    // Asigna el valor correcto a `turnoAux` según el tamaño y la hora de la cita
    if (this.formularioCita.get('tamano')?.value == 'Pequeño') {

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
    else if (this.formularioCita.get('tamano')?.value === 'Mediano') {
      if(this.formularioCita.get('hora_cita')?.value === '10:00'){
        turnoAux=2;
      }
      else if(this.formularioCita.get('hora_cita')?.value === '14:00'){
        turnoAux=3;
      }
    }
    else if (this.formularioCita.get('tamano')?.value === 'Grande') {
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
      //   alert("COINCIDEN arraycita.fecha: " + fechaFormateada + " turno" + this.arrayCitas[i].turno
      //   + "\nformulariocita: " + fechaCita + "formularioturno: " + turnoAux)
        coincidenciaEncontrada = true;
        break;
      }
    }
    return coincidenciaEncontrada;
  }
}
