import { Component, Input } from '@angular/core';
import { Cita } from '../clases/Cita';
import { CitasService } from '../servicios/citas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.component.html',
  styleUrls: ['./detalles-cita.component.css']
})
export class DetallesCitaComponent {

  @Input() cita: Cita;

  id:number
  fecha: string
  turno: number;
  ultimaCita: Cita
  constructor(private citaService:CitasService, private activarRuta:ActivatedRoute,private ruta:Router){
    this.cita = new Cita()
    this.id = 0
    this.fecha = ""

  }

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
