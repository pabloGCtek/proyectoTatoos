import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { LocalStorageService } from '../servicios/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  contrasena: string;
  usuarioActivo: boolean;
  usuario: Usuario
  constructor(public router:Router, private userService: UsuariosService, private localStorage: LocalStorageService){
    }
  ngOnInit(){
  }
  login(){
    this.userService.inicioSesion(this.email, this.contrasena)
      .subscribe(data=>{
          if(data && data.contrasena && data.email && data.nombre){
            this.localStorage.login(data)
            this.router.navigateByUrl('/')
          }
      })

    }




  }
