import { Component } from '@angular/core';
import { Alumno } from './models/interfaces';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss',
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: Alumno[] = [
    {
      id: 1,
      firstName: 'Alan',
      lastName: 'Scheinkman',
      email: 'shake@mail.com',
      password: '2123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Saint',
      lastName: 'Saint',
      email: 'Saint@mail.com',
      password: '1233456',
      role: 'USER',
    },
  ];

  onAlumnoSubmitted(ev: Alumno): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
}
