import { Artista } from "./Artista";
import { Cita } from "./Cita";

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
  citasTattoo:Cita[]=[]
}
