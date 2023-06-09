

import { Component } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalStorageService } from '../servicios/local-storage.service';


@Component({
selector: 'app-perfil',
templateUrl: './perfil.component.html',
styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
usuario: Usuario


constructor(private sUsuario: UsuariosService, private localstorage: LocalStorageService){

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
