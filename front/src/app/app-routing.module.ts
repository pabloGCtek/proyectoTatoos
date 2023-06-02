import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetallesTattoComponent } from './detalles-tatto/detalles-tatto.component';
import { CitaTattooArtistaComponent } from './cita-tattoo-artista/cita-tattoo-artista.component';
import { CitaTattooPropioComponent } from './cita-tattoo-propio/cita-tattoo-propio.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DetallesCitaComponent } from './detalles-cita/detalles-cita.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'tatto/:id', component:DetallesTattoComponent},
  {path: 'pedir_cita', component:PedirCitaComponent},
  {path: 'cita_tattoo_artista', component:CitaTattooArtistaComponent},
  {path: 'cita_tattoo_propio', component:CitaTattooPropioComponent},
  {path:'terminos', component:TerminosComponent},
  {path:'cita/:id',component:DetallesCitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
