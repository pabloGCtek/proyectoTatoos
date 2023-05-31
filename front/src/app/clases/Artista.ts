import { Tattoo } from "./Tattoo"

export class Artista{
  idArtista:number = 0
  nombre:string=""
  bio:string=""
  imagen:string=""
  tattoos:Tattoo[] = []
  constructor(idArtista: number, nombre:string,bio:string,imagen:string,tattoos: Tattoo[]){
    this.idArtista=idArtista
    this.nombre=nombre
    this.bio=bio
    this.imagen=imagen
    this.tattoos=tattoos
  }
}
