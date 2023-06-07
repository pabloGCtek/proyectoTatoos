import { Component } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { Router } from '@angular/router';
import { LocalStorageService } from '../servicios/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: Usuario
  formatoDate:string;
  constructor(private localStorageSer: LocalStorageService, private router: Router){
  }

  ngOnInit(){
    this.usuario=this.localStorageSer.usuarioLogeado()
    const date= new Date(this.usuario.fechaNacimiento)
     this.formatoDate= date.toLocaleDateString();
    }

}
