import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule, // Módulo para el menú lateral (sidenav)
    MatCardModule,    // Módulo para las tarjetas de contenido
    MatListModule,    // Módulo para la lista del menú lateral
    MatButtonModule,  // Módulo para los botones
    MatIconModule,    // Módulo para los iconos
    MatToolbarModule, // Módulo para la barra de herramientas
    CommonModule      // Módulo común para directivas y otros componentes básicos
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Variable para controlar si el menú lateral está abierto o cerrado
  isMenuOpen = false; // Iniciar con el menú lateral cerrado

  // Lista de elementos del menú lateral
  menuItems = [
    { label: 'Clientes', route: '/clientes' },
    { label: 'Propuestas', route: '/propuestas' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Tareas Internas', route: '/tareas-internas' },
    { label: 'Reportes', route: '/reportes' },
  ];

  // Lista de tarjetas de contenido del Home
  cards = [
    { title: 'Clientes', description: 'Gestiona la información de tus clientes, incluyendo detalles y contacto.' },
    { title: 'Propuestas', description: 'Visualiza y administra las propuestas enviadas a los clientes.' },
    { title: 'Proyectos', description: 'Revisa el estado y el avance de los proyectos en curso.' },
    { title: 'Tareas Internas', description: 'Administra las tareas internas de la empresa para asegurar la productividad.' },
    { title: 'Reportes', description: 'Genera reportes de actividades y rendimiento.' },
  ];

  isSidenavOpen = false;

  constructor(private router: Router) {}

  // Método para manejar la navegación cuando se selecciona una opción del menú
  navigate(route: string) {
    this.router.navigate([route]);
  }

  // Método para cerrar el menú
  close() {
    this.isMenuOpen = false; // Cierra el menú
  }

  toogleIcon(){
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
