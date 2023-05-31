import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Artista } from 'src/assets/clases/Artista';
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
  this.servicioArt.mostrarArtista().subscribe((val: any) => this.arrArtistas = val)
  }
  //rrArtistas: Artista[] = [new Artista("pepe","Intro para el artista va aquí","../assets/media/tatuador1.jpg"),new Artista("Juana","Lorem ipsum y tal","../assets/media/tatuador2.jpg")];
}
