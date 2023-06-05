import { Component } from '@angular/core';
import { Artista } from 'src/assets/clases/Artista';
import { ArtistasService } from 'src/assets/servicios/artistas.service';
import { LocalStorageService } from '../servicios/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrArtistas: Artista[] = [];
  usuarioActivo:Boolean;
  constructor(private servicioArt: ArtistasService, private localStorage: LocalStorageService){

  }
  ngOnInit(){
  this.usuarioActivo=this.localStorage.logeado()
  this.servicioArt.mostrarArtistas().subscribe((val: any) => this.arrArtistas = val)
  }
}
