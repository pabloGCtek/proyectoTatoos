import { Component, Input } from '@angular/core';
import { Cita } from '../clases/Cita';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.css']
})
export class CitaCardComponent {
  @Input() cita: Cita
  hora:string
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
}
