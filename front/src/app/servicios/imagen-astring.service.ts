import { Injectable } from '@angular/core';
import { Tattoo } from '../clases/Tattoo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ImagenAStringService {
  private url:String = "http://localhost:8080/tattoos"

  constructor(private httpC:HttpClient) { }

  getBase64(file:File):Promise<string>{
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
    })
  }
  insertarTattoo(tattoo:Tattoo):Observable<Object>{
    return this.httpC.post(`${this.url}`,tattoo)
  }
}
