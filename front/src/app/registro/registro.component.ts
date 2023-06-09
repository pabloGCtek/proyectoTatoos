import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  user: Usuario
  miFormulario: FormGroup;
  contrasenasCoinciden: boolean = true;


  constructor(private usService: UsuariosService, private route: Router,private toastr: ToastrService) {
    this.user = new Usuario();
    this.miFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)]),
      password2: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      acepto_condiciones: new FormControl('', Validators.required)
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
  //obtencion de la fecha actual
  fecha_actual:string = new Date().toISOString().split('T')[0];
  fecha_nacimiento:Date = new Date();
  edad: number = 0;
  formularioRelleno:boolean=false;
  ngOnInit(){}

  enviarRegistro(){
    if(this.miFormulario.valid){
    this.user.email = this.miFormulario.get('email')?.value
    this.user.contrasena = this.miFormulario.get('password')?.value
    this.user.nombre = this.miFormulario.get('usuario')?.value
    this.user.fechaNacimiento =this.miFormulario.get('fecha_nacimiento')?.value
    this.usService.insert(this.user).subscribe(u =>
    this.route.navigateByUrl('/login'))
    }
    else{
      alert('error en el formulario')
    }

  }
  formularioCompleto(): boolean {
    if (this.formularioRelleno) {
      return (
        this.miFormulario.get('email')?.value &&
        this.miFormulario.get('password')?.value &&
        this.miFormulario.get('password2')?.value &&
        this.miFormulario.get('usuario')?.value &&
        this.miFormulario.get('fecha_nacimiento')?.value &&
        this.miFormulario.get('acepto_condiciones')?.value &&
        this.contrasenasCoinciden
      );
    } else {
      return (
        this.miFormulario.get('email')?.value &&
        this.miFormulario.get('password')?.value &&
        this.miFormulario.get('password2')?.value &&
        this.miFormulario.get('usuario')?.value &&
        this.miFormulario.get('fecha_nacimiento')?.value &&
        this.miFormulario.get('acepto_condiciones')?.value &&
        this.contrasenasCoinciden
      );
    }
  }
}
