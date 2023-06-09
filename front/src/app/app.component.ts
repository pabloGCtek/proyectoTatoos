import { Component } from '@angular/core';
import { Usuario } from './clases/Usuario';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './servicios/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoTatoos';
  usuario: Usuario
  usuarioActivo:boolean;
  edad: number = 0;
  esMenor:boolean=false;
  constructor(private localStorageSer: LocalStorageService, private router: Router,private toastr: ToastrService){
    setInterval(() => {
      this.mostrarAviso();
    }, 10000);
    this.localStorageSer.datosDesesion$.subscribe(usuarioA=>{
      this.usuarioActivo=usuarioA;
      this.usuario=this.localStorageSer.usuarioLogeado()})


  }
ngOnInit(){
  this.usuarioActivo=this.localStorageSer.logeado()
}
mostrarAviso()
{
  // this.usuario=this.localStorageSer.usuarioLogeado()
  // const fechaNacimientoDate = new Date(this.usuario.fechaNacimiento);
  // const fechaActual = new Date();

  // let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  // const mesActual = fechaActual.getMonth() + 1;
  // const diaActual = fechaActual.getDate();
  // const mesNacimiento = fechaNacimientoDate.getMonth() + 1;
  // const diaNacimiento = fechaNacimientoDate.getDate();

  // if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
  //   edad--;
  // }
  // if(edad<18){
    this.toastr.info('Eres menor de edad, recuerda que para tatuarte debes llevar autorización', 'Aviso');
  // }
}

  logout(){
    this.localStorageSer.logout()
    this.router.navigateByUrl('login')
    this.usuarioActivo=this.localStorageSer.logeado()
  }
  loginYperfil(){
    if(this.usuarioActivo==true)
    {
      this.router.navigateByUrl('/perfil')
    }
    else
    this.router.navigateByUrl('/login')
  }
}
