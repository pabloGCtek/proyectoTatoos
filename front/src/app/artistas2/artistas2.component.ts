import { Component, Input } from '@angular/core';
import { Artista } from 'src/assets/clases/Artista';

@Component({
  selector: 'app-artistas2',
  templateUrl: './artistas2.component.html',
  styleUrls: ['./artistas2.component.css']
})
export class Artistas2Component {
  @Input() artista: Artista;
}
