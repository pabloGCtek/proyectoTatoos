import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { Tattoo } from '../clases/Tattoo';
import { Artista } from '../clases/Artista';


@Component({
  selector: 'app-detalles-tatto',
  templateUrl: './detalles-tatto.component.html',
  styleUrls: ['./detalles-tatto.component.css']
})
export class DetallesTattoComponent {
  tattos: Tattoo[]=[];
  id: number=0;
  nombre:string="";
  imagen:string=""
  artista:Artista
  descripcion:string=""
  tattoN: Tattoo

  constructor(private tattoServicio:GalleryService,
    private activarRuta: ActivatedRoute, private ruta: Router){}

    ngOnInit()
    {
      this.id=this.activarRuta.snapshot.params["id"]
      let tattoN=this.tattoServicio.obtenerPorId(this.id)
      // if(tattoN!=undefined){
      // this.nombre=tattoN.nombre
      // this.descripcion=tattoN.descripcion
      // this.imagen=tattoN.imagen
      // }
    }

    mostrarTodos(): void{
      this.tattoServicio.mostrarTatto().subscribe(data=>this.tattos=data)
     }
    obtenerPorId(id: number)
    {
      return  this.tattos.find((t)=>t.idTatto==id)
    }
    regresar(){
      this.ruta.navigate(['gallery'])
    }

}
