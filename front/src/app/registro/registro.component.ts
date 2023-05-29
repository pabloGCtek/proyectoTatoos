import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  user: Usuario
  miFormulario: FormGroup;
  contrasenasCoinciden: boolean = true;

  constructor(private usService: UsuariosService) {
    this.user = new Usuario();
    this.miFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password2: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
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
  esMenor:boolean=false;
  ngOnInit(){}

  enviarRegistro(){
    this.calcularEdad();
    this.user.email = this.miFormulario.get('email')?.value
    this.user.contrasena = this.miFormulario.get('password')?.value
    this.user.nombre = this.miFormulario.get('usuario')?.value
    this.user.fecha_nacimiento = new Date(this.fecha_nacimiento)
    console.log("Hola")
    alert("Hola")
    this.usService.insert(this.user).subscribe(u => console.log(u))
  }
  calcularEdad(){
    const fechaNacimiento = new Date(this.fecha_nacimiento);
    const hoy = new Date();
    this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      this.edad--;
    }
    // Comprobacion de mayor de edad
    if(this.edad<18){
      this.esMenor=true
    }
  }

  //Funcion que deshabilita el boton hasta que estén todos los campos rellenos
  formularioCompleto(): boolean {
    if (this.esMenor) {
      return (
        this.miFormulario.get('email')?.value &&
        this.miFormulario.get('password')?.value &&
        this.miFormulario.get('password2')?.value &&
        this.miFormulario.get('usuario')?.value &&
        this.miFormulario.get('fecha_nacimiento')?.value &&
        this.contrasenasCoinciden
      );
    } else {
      return (
        this.miFormulario.get('email')?.value &&
        this.miFormulario.get('password')?.value &&
        this.miFormulario.get('password2')?.value &&
        this.miFormulario.get('usuario')?.value &&
        this.miFormulario.get('fecha_nacimiento')?.value &&
        this.contrasenasCoinciden
      );
    }
  }

}
