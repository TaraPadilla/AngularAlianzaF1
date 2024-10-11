import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // Agregado para mat-card
import { CommonModule } from '@angular/common';  // Para utilizar directivas como *ngIf y *ngFor

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,             // Para las directivas básicas de Angular
    FormsModule,              // Para trabajar con ngModel
    MatFormFieldModule,       // Para usar mat-form-field
    MatInputModule,           // Para usar matInput
    MatButtonModule,           // Para los botones de Angular Material
    MatCardModule             // Importar MatCardModule para mat-card
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('authToken');  // Eliminar el token cada vez que se carga la página de login
  }

  onLogin() {
    // Simulación de autenticación básica
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('authToken', '123456');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
