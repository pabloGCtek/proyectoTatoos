import { Cita } from "./Cita";

export class Usuario{
    idUsuario:number;
    nombre:string = "";
    email:string = "";
    contrasena:string = "";
    fechaNacimiento:Date=new Date();
    citasUsuario:Cita[] = [];

}
