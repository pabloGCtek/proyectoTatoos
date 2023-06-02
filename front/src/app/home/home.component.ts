import { Component } from '@angular/core';
import { Artista } from '../clases/Artista';
import { ArtistasService } from 'src/assets/servicios/artistas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrArtistas: Artista[] = [];
  constructor(private servicioArt: ArtistasService){

  }
  ngOnInit(){
  this.servicioArt.mostrarArtistas().subscribe((val: any) => this.arrArtistas = val)
  }
}