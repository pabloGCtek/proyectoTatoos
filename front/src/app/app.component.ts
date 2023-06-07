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
  constructor(private localStorageSer: LocalStorageService, private router: Router,private toastr: ToastrService){
    setInterval(() => {
      this.mostrarAviso();
    }, 50000);
    this.localStorageSer.datosDesesion$.subscribe(usuarioA=>{
      this.usuarioActivo=usuarioA;
      this.usuario=this.localStorageSer.usuarioLogeado()})
  }
ngOnInit(){
  this.usuarioActivo=this.localStorageSer.logeado()
}

mostrarAviso() {
  this.toastr.info('Recuerda que si eres menor de edad, necesitas llevar autorización el dia de la cita.', 'Aviso');
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
