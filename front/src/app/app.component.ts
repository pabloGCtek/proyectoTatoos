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
  const fechaNacimiento = new Date(this.usuario.fechaNacimiento);
  const hoy = new Date();
  const legalAge: number = 18; // Edad legal
  let edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes: number = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  if(this.localStorageSer.logeado())
  { if(edad<legalAge)
    {
      this.toastr.info('Eres menor de edad, recuerda que para tatuarte debes llevar autorización', 'Aviso');
    }
    }

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
