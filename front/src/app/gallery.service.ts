import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tatto } from './_modelo/Tattoo';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

//  private tatoUrl=''
// constructor(private http: HttpClient){}

 tattos: Tatto[]=[
 new Tatto(1,"foto1",1,"tatuatebonito1","/assets/media/diseño1.webp"),
 new Tatto(2,"foto2",2,"tatuatebonito1","/assets/media/diseño2.jpeg"),
 new Tatto(3,"foto3",3,"tatuatebonito1","/assets/media/diseño3.jpeg"),
 new Tatto(4,"foto4",4,"tatuatebonito1","/assets/media/diseño4.jpeg"),
 new Tatto(5,"foto5",1,"tatuatebonito1","/assets/media/diseño5.jpeg"),
 new Tatto(5,"foto5",2,"tatuatebonito1","/assets/media/diseño5.jpeg"),
 new Tatto(1,"foto1",1,"tatuatebonito1","/assets/media/diseño1.webp"),
 new Tatto(2,"foto2",2,"tatuatebonito1","/assets/media/diseño2.jpeg"),
 new Tatto(3,"foto3",3,"tatuatebonito1","/assets/media/diseño3.jpeg"),
 new Tatto(4,"foto4",4,"tatuatebonito1","/assets/media/diseño4.jpeg"),
 new Tatto(5,"foto5",1,"tatuatebonito1","/assets/media/diseño5.jpeg"),
 new Tatto(5,"foto5",2,"tatuatebonito1","/assets/media/diseño5.jpeg"),
 new Tatto(1,"foto1",1,"tatuatebonito1","/assets/media/diseño1.webp"),
 new Tatto(2,"foto2",2,"tatuatebonito1","/assets/media/diseño2.jpeg"),
 new Tatto(3,"foto3",3,"tatuatebonito1","/assets/media/diseño3.jpeg")
 ]


  mostrarTatto()
 {
    return this.tattos
}

encontrarTatto(id:number){

 return this.tattos.find((t)=>t.idTatto==id)
  }
}
