import { Component, Input } from '@angular/core';
import { Cita } from '../clases/Cita';
import { CitasService } from '../servicios/citas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocalStorageService } from '../servicios/local-storage.service';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent {
  fecha: string
  ultimaCita: Cita
  cita:Cita
  hora:string
  turno:number
  usuario: Usuario
  constructor(private citaService:CitasService, private activarRuta:ActivatedRoute,private ruta:Router, private localStorage: LocalStorageService){
    this.usuario=this.localStorage.usuarioLogeado()
  }
//recibir la ultima cita en el momento de cargar la página
  ngOnInit(){
    this.obtenerUltimaCita();

  }

  obtenerUltimaCita(){

    this.citaService.obtenerUltimaCita().subscribe((cita:any)=>this.ultimaCita=cita)
    this.fecha = this.cita.fecha.toLocaleDateString()



  }
  regresar(){
    this.ruta.navigate(['gallery'])
  }
}
