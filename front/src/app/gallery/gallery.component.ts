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
  activeButton: string="Todos"
  activeButton1: number=1
  ngOnInit()
  {
    this.tattoServicio.mostrarTatto().subscribe(data=>this.tattoFiltrado=data)
    this.mostrarTodos()
    this.filtrarTodos(this.activeButton)
    this.mostrarArtistas()

  }
  mostrarTodos(): void{
   this.tattoServicio.mostrarTatto().subscribe(data=>this.tattos=data)
  }
  mostrarArtistas():void{
    this.artistaServicio.mostrarArtista().subscribe(data=>this.artistas=data)
  }
  filtrarTodos(todos: string){
    this.tattoFiltrado=this.tattos
    if (this.activeButton !== todos) {
      this.activeButton = todos;
    }
  }
  filtrarPorArtista(id: number){
    this.tattoFiltrado=this.artistas[id].tattoos
    if (this.activeButton1 !== id) {
      this.activeButton1= id;
    }
  }
  filtrarPorTamano(tamano: string){
    this.tattoFiltrado = this.tattos.filter(tatto => tatto.tamano === tamano);
    if (this.activeButton !== tamano) {
      this.activeButton = tamano;
    }
  }

}
