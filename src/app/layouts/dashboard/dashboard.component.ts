import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router) {} // Inyectar Router

  navigateToCursos() {
    this.router.navigate(['/cursos']);
  }

  navigateToSeguridad() {
    this.router.navigate(['/seguridad']);
  }
}