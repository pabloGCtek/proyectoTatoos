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
      this.tattoServicio.obtenerPorId(this.id).subscribe(dato=>{
        this.tattoN=dato
        this.nombre=this.tattoN.nombre
        this.descripcion=this.tattoN.descripcion
        this.imagen=this.tattoN.imagen
        this.artista=this.tattoN.artista})
    }
    mostrarTodos(): void{
      this.tattoServicio.mostrarTatto().subscribe(data=>this.tattos=data)
     }
     obtenerPorId(id: number){
      return this.tattos.find((t)=>t.idTattoo==id)
     }
    regresar(){
      this.ruta.navigate(['gallery'])
    }

}

// this.id=this.activarRuta.snapshot.params["id"]
//         this.tattoServicio.obtenerPorId(this.id).subscribe(tattoo=>{
//         this.nombre=tattoo.nombre
//         this.imagen=tattoo.imagen
//         this.descripcion=tattoo.descripcion}
//        )
