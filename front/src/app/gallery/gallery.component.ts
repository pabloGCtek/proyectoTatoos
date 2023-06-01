import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Tattoo } from '../clases/Tattoo';
import { ArtistasService } from '../artistas.service';
import { Artista } from '../clases/Artista';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private artistaServicio: ArtistasService, private tattoServicio: GalleryService){}
  tattos: Tattoo[]=[]
  artistas:Artista[]=[]
  idArtista: number;
  tattoFiltrado: Tattoo[]=[]
  tattoFiltrados: Artista[]=[]
  ngOnInit()
  {
    this.tattoServicio.mostrarTatto().subscribe(data=>this.tattoFiltrado=data)
    this.mostrarTodos()
    this.filtrarTodos()
    this.mostrarArtistas()

  }
  mostrarTodos(): void{
   this.tattoServicio.mostrarTatto().subscribe(data=>this.tattos=data)
  }
  mostrarArtistas():void{
    this.artistaServicio.mostrarArtista().subscribe(data=>this.artistas=data)
  }
  filtrarTodos(){
    this.tattoFiltrado=this.tattos
  }
  filtrarPorArtista(id: number){
    // a: Artista=this.artistas.filter(tatto=>tatto.idArtista=id)
    this.tattoFiltrado=this.artistas[id].tattoos
    // this.tattoFiltrados=this.artistas.filter(tatto=>this.idArtista=id)
  }

}
