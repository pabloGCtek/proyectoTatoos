import { Component, Input } from '@angular/core';
import { Cita } from '../clases/Cita';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.css']
})
export class CitaCardComponent {
  @Input() cita: Cita
}
