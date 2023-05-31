import { Component } from '@angular/core';
import { Artista } from '../clases/Artista';
import { ArtistasService } from '../artistas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // constructor( private: ArtistasService){}
  // arrArtistas: Artista[] = [new Artista(,"../assets/media/tatuador1.jpg"),new Artista("")];
  // NgOnInit(){
  //   alert(this.arrArtistas[0].nombre)
  // }
}
