import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../clases/Usuario';
import { ChangeDetectorRef } from '@angular/core';
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
          if(data && data.contrasena && data.email){
            this.localStorage.login(data)
            this.router.navigateByUrl('/')
          }
      })

    }




  }
