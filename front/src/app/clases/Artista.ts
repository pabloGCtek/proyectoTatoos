import { Cita } from "./Cita"
import { Tattoo } from "./Tattoo"

export class Artista{
  idArtista:number = 0
  nombre:string=""
  bio:string=""
  imagen:string=""
  tattoos:Tattoo[] = []
  citasArtista:Cita[]=[]
}
