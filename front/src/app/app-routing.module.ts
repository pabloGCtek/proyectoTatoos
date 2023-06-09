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
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { CitaTattooDetalleComponent } from './cita-tattoo-detalle/cita-tattoo-detalle.component';
import { DetallesCitaComponent } from './detalles-cita/detalles-cita.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'tatto/:id', component:DetallesTattoComponent},
  {path:'perfil',component:PerfilComponent},
  {path: 'pedir_cita', component:PedirCitaComponent, canActivate: [AuthGuard]},
  {path: 'cita_tattoo_artista', component:CitaTattooArtistaComponent, canActivate: [AuthGuard]},
  {path: 'cita_tattoo_artista/:id', component:CitaTattooArtistaComponent, canActivate: [AuthGuard]},
  {path: 'cita_tattoo_propio', component:CitaTattooPropioComponent, canActivate: [AuthGuard]},
  {path: 'cita_tattoo_detalle/:id', component:CitaTattooDetalleComponent, canActivate: [AuthGuard]},
  {path:'terminos', component:TerminosComponent},
  {path:'detalle-cita', component:DetallesCitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
