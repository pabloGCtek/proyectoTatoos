

import { Component } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
selector: 'app-perfil',
templateUrl: './perfil.component.html',
styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
usuario: Usuario;


constructor(private sUsuario: UsuariosService){


}
ngOnInit(){
 this.sUsuario.inicioSesion("Juan","1234").subscribe((val: any) => this.usuario = val)
 } checkContraseña():boolean{
return true
}
guardarMods(){
if(this.checkContraseña()){

  this.sUsuario.modificaUsuario(this.usuario);
  
 }
}
}