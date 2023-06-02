import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { DetallesTattoComponent } from './detalles-tatto/detalles-tatto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { Artistas2Component } from './artistas2/artistas2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CitaTattooArtistaComponent } from './cita-tattoo-artista/cita-tattoo-artista.component';
import { CitaTattooPropioComponent } from './cita-tattoo-propio/cita-tattoo-propio.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DetallesCitaComponent } from './detalles-cita/detalles-cita.component';
import { CitasService } from './servicios/citas.service';


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
    DetallesCitaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    GalleryService,
    UsuariosService,
    CitasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
