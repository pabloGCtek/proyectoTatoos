import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { Tatto } from '../_modelo/Tattoo';

@Component({
  selector: 'app-detalles-tatto',
  templateUrl: './detalles-tatto.component.html',
  styleUrls: ['./detalles-tatto.component.css']
})
export class DetallesTattoComponent {
  tattos: Tatto[]=[];
  id: number=0;
  nombre:string="";
  imagen:string=""
  idArtista:number=0;
  descripcion:string=""

  tattoN: Tatto=new Tatto(0,"",0,"","");
  constructor(private miServicio:GalleryService,
    private activarRuta: ActivatedRoute, private ruta: Router){

      this.id=this.activarRuta.snapshot.params["id"]
      let tattoN=this.miServicio.encontrarTatto(this.id)
      if(tattoN!=undefined){
      this.nombre=tattoN.nombre
      this.idArtista=tattoN.idArtista
      this.descripcion=tattoN.descripcion
      this.imagen=tattoN.imagen
      }
    }

    regresar(){
      this.ruta.navigate(['gallery'])
    }

}
