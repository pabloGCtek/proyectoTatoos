import { Component } from '@angular/core';
import { Artista } from 'src/assets/clases/Artista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrArtistas: Artista[] = [new Artista("pepe","Intro para el artista va aquí","../assets/media/tatuador1.jpg"),new Artista("Juana","Lorem ipsum y tal","../assets/media/tatuador2.jpg")];
  NgOnInit(){
    alert(this.arrArtistas[0].nombre)
  }
}
