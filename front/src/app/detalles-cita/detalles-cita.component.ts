import { Component } from '@angular/core';
import { Cita } from '../clases/Cita';
import { CitasService } from '../servicios/citas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent {
  cita: Cita
  id:number
  fecha: string
  constructor(private citaService:CitasService, private activarRuta:ActivatedRoute,private ruta:Router){
    this.cita = new Cita()
    this.id = 0
    this.fecha = ""
  }

  ngOnInit(){
    this.id=this.activarRuta.snapshot.params["id"]
    this.citaService.obtenerPorId(this.id).subscribe(c=>{
      this.cita=c
    })
    this.fecha = this.cita.fecha.toLocaleDateString()
  }
  regresar(){
    this.ruta.navigate(['gallery'])
  }
}
