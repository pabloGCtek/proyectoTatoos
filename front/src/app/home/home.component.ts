import { Component } from '@angular/core';
import { Artista } from 'src/assets/clases/Artista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(){
    this.servicioArt.mostrarArtista().subscribe((val: any) => this.arrArtistas = val)
    }  NgOnInit(){
  }
}
