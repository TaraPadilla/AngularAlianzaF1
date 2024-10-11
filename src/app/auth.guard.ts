import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si hay un token guardado
    if (isAuthenticated) {
      return true;  // Si está autenticado, permite el acceso
    } else {
      this.router.navigate(['/login']);  // Si no está autenticado, redirige al login
      return false;  // No permite el acceso a la ruta protegida
    }
  }
}
