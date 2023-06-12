import { Component, Input } from '@angular/core';
import { Cita } from '../clases/Cita';
import { CitasService } from '../servicios/citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.css']
})
export class CitaCardComponent {
  @Input() cita: 
  Cita
  hora:string
    constructor(private servCita: CitasService, private route: Router){
      
    }
  ngOnInit(){
    if(this.cita.turno == 1){
      this.hora="8:00"
    }else if(this.cita.turno == 2){
      this.hora="10:00"
    }
    else if(this.cita.turno == 3){
      this.hora="14:00"
    }

    }

    borrarCita(){
      this.servCita.borrarCita(this.cita.idCita).subscribe(u =>
        window.location.reload())
    }
}
