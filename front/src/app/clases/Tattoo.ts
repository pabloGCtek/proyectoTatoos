import { Artista } from "./Artista";

export class Tattoo
{
  idTattoo: number=0;
  nombre: string ="";
  descripcion: string="";
  lugar: string=""
  tamano: string=""
  imagen: string="";
  tattooPropio: boolean
  precio: number;
  artista: Artista;

  constructor(idTatto: number, nombre:string,descripcion: string,imagen:string, artista:Artista){
    this.idTattoo=idTatto;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.imagen=imagen;
    this.artista=artista
  }

}
