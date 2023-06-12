import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tattoo } from '../clases/Tattoo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private tatoUrl: string ="http://localhost:8080/tattoos"

  constructor(private http: HttpClient){}

  mostrarTatto():Observable<Tattoo[]>
  {
      return this.http.get<Tattoo[]>(this.tatoUrl)
  }

  obtenerPorId(id: number):Observable<Tattoo>{
    return  this.http.get<Tattoo>(`${this.tatoUrl}/${id}`)
  }
  obtenerPorNombre(nombre: string):Observable<Tattoo>{
    return  this.http.get<Tattoo>(`${this.tatoUrl}/${nombre}`)
  }
  encontrarUltimoTattoo():Observable<Tattoo>{
    return this.http.get<Tattoo>(`${this.tatoUrl}/ultimoTattoo`)
  }
}
