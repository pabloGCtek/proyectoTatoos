import { Injectable } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  usuario: Usuario[]

  private datosSesionSubject = new BehaviorSubject<boolean>(false);
  datosDesesion$ = this.datosSesionSubject.asObservable();

  constructor() { }

  //Iniciar session y guarda los datos en localStorage
login(user: any):void{
    // console.log(user)
localStorage.setItem('datosDesesion', JSON.stringify(user));
this.datosSesionSubject.next(true)
}

//Cerrar sesion elimina los datos en el localstorage
logout(): void {

  localStorage.removeItem('datosDesesion');
}

//verifica si hay datos de sesion almacenados
logeado(): boolean {
  const userData = localStorage.getItem('datosDesesion');
  return !!userData; //el !! es para convertirlo en booleando
}
//obtener los datos del usuario logeado
usuarioLogeado() {
  const datosDesesion = localStorage.getItem('datosDesesion');
  if (datosDesesion !== null)
  return this.usuario=JSON.parse(datosDesesion);;
}
//verifica si hay cambios en los datos de sesion
verificarSesion(): void {
  const userData = localStorage.getItem('datosDesesion');
  this.datosSesionSubject.next(!!userData);
}

}
