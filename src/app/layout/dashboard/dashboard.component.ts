import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

export class DashComponent {
  showFiller = false;

  constructor(private router: Router) {} // Inyectar Router

  navigateToCursos() {
    this.router.navigate(['/courses']);
  }

  navigateToStudents() {
    this.router.navigate(['/students']);
  }

  navigateToLessons() {
    this.router.navigate(['/lessons']);
  }
  
}
