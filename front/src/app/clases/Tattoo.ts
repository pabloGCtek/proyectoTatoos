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
  // citasTattoo: Citas[]=[]

  constructor(idTatto: number, nombre:string,descripcion: string,lugar:string, tamano:string,imagen:string, tattoPropio: boolean, precio: number, artista:Artista){
    this.idTattoo=idTatto;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.lugar=lugar;
    this.tamano=tamano;
    this.imagen=imagen;
    this.tattooPropio=tattoPropio;
    this.precio=precio;
    this.artista=artista
  }
}
