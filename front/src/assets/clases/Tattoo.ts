import { Artista } from "./Artista";
export class Tattoo{

  idTatto: number=0;

  nombre: string ="";

  descripcion: string="";

  lugar: string=""

  tamano: string=""

  imagen: string="";

  tattooPropio: boolean

  precio: number;

  artista: Artista;




  constructor(idTatto: number, nombre:string,idArtista:number,descripcion: string,imagen:string, artista:Artista){

    this.idTatto=idTatto;

    this.nombre=nombre;

    this.descripcion=descripcion;

    this.imagen=imagen;

    this.artista=artista

  }




}