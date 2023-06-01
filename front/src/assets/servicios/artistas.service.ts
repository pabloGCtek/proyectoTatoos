import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artista } from 'src/assets/clases/Artista';


@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private http: HttpClient) { }
  private artistaUrl: string ="http://localhost:8080/artistas"

  artistas: Artista[]=[]
  mostrarArtistas():Observable<Artista[]>
{
    
    return this.http.get<Artista[]>(this.artistaUrl)
}

}
