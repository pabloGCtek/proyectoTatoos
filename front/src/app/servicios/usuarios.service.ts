import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Route, Router, Routes } from '@angular/router';
import { Usuario } from '../clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:String = "http://localhost:8080/usuarios"
  public usActual:Observable<Usuario>

  constructor(private http:HttpClient, private router: Router) { }

  insert(user:Usuario):Observable<any>{
    return this.http.post(`${this.url}`,user)
  }
  
  inicioSesion(email: string, clave: string):Observable<Usuario>
  {
    this.usActual = this.http.get<Usuario>(`${this.url}/${email}/${clave}`)
    return this.usActual
  }
  modificaUsuario(us: Usuario):Observable<any>{
    return this.http.put(`${this.url}`,us)
  } 
}
