import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url:String = "http://localhost:8080/usuarios"

  constructor(private httpC:HttpClient) { }

  insert(user:Usuario):Observable<Object>{
    return this.httpC.post(`${this.url}/insertar`,user)
  }
}
