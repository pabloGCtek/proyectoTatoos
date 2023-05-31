import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetallesTattoComponent } from './detalles-tatto/detalles-tatto.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'tatto/:id', component:DetallesTattoComponent},
  {path:'terminos', component: TerminosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
