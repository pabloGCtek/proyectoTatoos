import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetallesTattoComponent } from './detalles-tatto/detalles-tatto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { Artistas2Component } from './artistas2/artistas2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CitaTattooArtistaComponent } from './cita-tattoo-artista/cita-tattoo-artista.component';
import { CitaTattooPropioComponent } from './cita-tattoo-propio/cita-tattoo-propio.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TerminosComponent } from './terminos/terminos.component';
import { ToastrModule } from 'ngx-toastr';
import { UsuariosService } from './servicios/usuarios.service';
import { GalleryService } from './servicios/gallery.service';
import { ImagenAStringService } from './servicios/imagen-astring.service';
import { LocalStorageService } from './servicios/local-storage.service';
import { CitaTattooDetalleComponent } from './cita-tattoo-detalle/cita-tattoo-detalle.component';
import { ArtistasService } from './servicios/artistas.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    DetallesTattoComponent,
    LoginComponent,
    RegistroComponent,
    Artistas2Component,
    CarouselComponent,
    CitaTattooArtistaComponent,
    CitaTattooPropioComponent,
    PedirCitaComponent,
    PerfilComponent,
    TerminosComponent,
    CitaTattooDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000,  // Duración predeterminada del mensaje en milisegundos
      positionClass: 'toast-top-right',  // Posición del mensaje
      preventDuplicates: true,  // Evita mostrar mensajes duplicados
    }),
  ],
  providers:
  [GalleryService, UsuariosService, ImagenAStringService, LocalStorageService, ArtistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
