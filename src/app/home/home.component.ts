import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FullCalendarModule,
    CommonModule, NgbAccordionModule     // Módulo común para directivas y otros componentes básicos
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
    { label: 'Propuestas', route: '/proposal' },
    { label: 'Proyectos', route: '/proposal' },
    { label: 'Tareas Internas', route: '/tareas-internas' },
    { label: 'Reportes', route: '/reportes' },
  ];

  // De la lista siguiente sin modificar nada mas eliminamos el campo mentors
  cards = [
    { title: 'Clientes',  description: 'Gestiona la información de tus clientes, incluyendo detalles y contacto.', icon: 'bi-people-fill' },
    { title: 'Propuestas', description: 'Visualiza y administra las propuestas enviadas a los clientes.', icon: 'bi-file-earmark-text-fill' },
    { title: 'Proyectos', description: 'Revisa el estado y el avance de los proyectos en curso.', icon: 'bi-kanban-fill' },
    { title: 'Tareas Internas', description: 'Administra las tareas internas de la empresa para asegurar la productividad.', icon: 'bi-list-task' },
    { title: 'Reportes', description: 'Genera reportes de actividades y rendimiento.', icon: 'bi-bar-chart-fill' },
  ];

  isSidenavOpen = false;
  isOpen: any;
  calendarOptions!: CalendarOptions;

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
