import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
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
    // Recibir los datos del formulario
    if (!this.username || !this.password) {
      alert('Por favor, ingrese usuario y contraseña');
      return;
    }

    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('authToken', '123456');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
