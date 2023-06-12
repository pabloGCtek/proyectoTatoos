import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../servicios/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private localStorage: LocalStorageService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorage.logeado()) {
      // El usuario está autenticado, permitir el acceso a la ruta
      return true;
    } else {
      return this.router.parseUrl('/login');
    }

  }
}
