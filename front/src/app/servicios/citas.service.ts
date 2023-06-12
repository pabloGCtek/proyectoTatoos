import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../clases/Cita';
import { Observable } from 'rxjs';
import { Tattoo } from '../clases/Tattoo';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private url:String = "http://localhost:8080/citas"

  constructor(private httpC:HttpClient) { }

  insert(cita:Cita):Observable<Object>{
    return this.httpC.post(`${this.url}`,cita)
  }
  obtenerPorId(id: number):Observable<Cita>{
    return  this.httpC.get<Cita>(`${this.url}/${id}`)
  }

  obtenerTodasCitas():Observable<Cita[]>{
    return this.httpC.get<Cita[]>(`${this.url}`);
  }
  obtenerUltimaCita():Observable<Cita>{
  return this.httpC.get<Cita>(`${this.url}/ultimaCita`)
  }

  borrarCita(id:number):Observable<any>{
    return this.httpC.delete(`${this.url}/${id}`)
  }
}
