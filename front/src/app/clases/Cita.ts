import { Artista } from "./Artista"
import { Tattoo } from "./Tattoo"
import { Usuario } from "./Usuario"

export class Cita{
    idCita:number = 0
    fecha:Date = new Date()
    turno:number = 0
    usuarioCita: Usuario = new Usuario()
    artistaCita: Artista = new Artista()
    tattoo: Tattoo = new Tattoo()
}