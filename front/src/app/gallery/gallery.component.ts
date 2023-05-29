import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { Tatto } from '../_modelo/Tattoo';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private miServicio: GalleryService){}
  tattos: Tatto[]=[]
  tattoFiltradas:Tatto[]=[]

  ngOnInit()
  {
    this.tattos=this.miServicio.tattos
    this.mostrarTodos()
    // this.ruta.navigate([''])
  }
  mostrarTodos(){
    this.tattoFiltradas=this.miServicio.mostrarTatto()
  }
  filtrarPorArtista(idArtista: number){
    this.tattoFiltradas=this.tattos.filter(tatto=>tatto.idArtista===idArtista)
  }
}
