

import { Component } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../servicios/local-storage.service';


@Component({
selector: 'app-perfil',
templateUrl: './perfil.component.html',
styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

usuario: Usuario;
miFormulario: FormGroup;
contrasenasCoinciden: boolean = true;


constructor(private sUsuario: UsuariosService, private route: Router, private localStorage: LocalStorageService){
  this.miFormulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)]),
    password2: new FormControl('', Validators.required),
  });

  this.miFormulario.get('password2')?.setValidators(this.passwordMatchValidator.bind(this)); // Necesario para mantener el contexto de this en la función passwordMatchValidator
    this.miFormulario.valueChanges.subscribe(() => {
      this.contrasenasCoinciden = this.miFormulario.get('password')?.value === this.miFormulario.get('password2')?.value;
    });
  }

  //Funcion para comprobar que la contraseña y la contraseña repetida sean iguales
  passwordMatchValidator(control: AbstractControl) {
    const password = control.root.get('password')?.value;
    const password2 = control.value;
    if (password !== password2) {
      return { mismatch: true };
    } else {
      return null;
    }
  }

ngOnInit(){
  this.sUsuario.inicioSesion(this.localStorage.usuarioLogeado().email,this.localStorage.usuarioLogeado().contrasena).subscribe(u =>
    {
        this.localStorage.login(u)
        this.usuario= this.localStorage.usuarioLogeado()
      }
  )
 }
guardarMods(){

  if(this.miFormulario.valid){
    this.usuario.email = this.miFormulario.get('email')?.value
    this.usuario.contrasena = this.miFormulario.get('password')?.value
    this.sUsuario.modificaUsuario(this.usuario).subscribe(u =>{
      this.localStorage.login(this.usuario)
      alert("Cambios registrados correctamente")
      window.location.reload()
    }
    )

    }
    else{
      alert('error en el formulario')
    }
 }
}
