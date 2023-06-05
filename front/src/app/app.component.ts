import { Component } from '@angular/core';
import { Usuario } from './clases/Usuario';
import { ChangeDetectorRef } from '@angular/core';
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
  constructor(private cdRef: ChangeDetectorRef,private localStorageSer: LocalStorageService, private router: Router,private toastr: ToastrService){
    setInterval(() => {
      this.mostrarAviso();
    }, 50000);
  }
ngOnInit(){
  this.usuario=this.localStorageSer.usuarioLogeado()
  this.usuarioActivo=this.localStorageSer.logeado()
}

cambiarVariable(){
  this.usuarioActivo=this.localStorageSer.logeado()
  this.cdRef.detectChanges();
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
