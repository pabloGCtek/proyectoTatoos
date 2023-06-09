import { Cita } from "./Cita";

export class Usuario{
    idUsuario:number = 0;
    nombre:string = "";
    email:string = "";
    contrasena:string = "";
    fechaNacimiento:Date=new Date();
    citasUsuario:Cita[]=[]
}
