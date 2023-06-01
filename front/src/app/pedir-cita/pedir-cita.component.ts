import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { UsuariosService } from '../usuarios.service';
import { Tattoo } from '../clases/Tattoo';
import { Artista } from '../clases/Artista';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent {
  tattos: Tattoo[]=[];
  id: number=0;
  nombre:string="";
  imagen:string=""
  idArtista:number=0;
  descripcion:string=""
  tattoo: Tattoo;

  miFormulario: FormGroup;
  constructor(private miServicio:GalleryService,private usService: UsuariosService,
    private activarRuta: ActivatedRoute, private ruta: Router){
    this.id=this.activarRuta.snapshot.params["id"]
      // let tattoN=this.miServicio.encontrarTatto(this.id)
      // if(tattoN!=undefined){
      // this.nombre=tattoN.nombre
      // this.idArtista=tattoN.idArtista
      // this.descripcion=tattoN.descripcion
      // this.imagen=tattoN.imagen

    this.miFormulario = new FormGroup({
      fecha_cita: new FormControl('', Validators.required),
    });
  }
}
