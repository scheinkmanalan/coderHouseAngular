import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    StudentsModule,
    CoursesModule,
    RouterModule.forChild([
      {
        // /dashboard/home
        path: 'home',
        component: CoursesComponent,
      },
      {
        // /dashboard/students
        path: 'students',
        loadChildren: () =>
          import('./pages/students/students.module').then((m) => m.StudentsModule),
      },
      {
        // /dashboard/courses
        path: 'courses',
        loadChildren: () =>
          import('./pages/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
    ]),
  ],
  exports: [DashComponent],
})
export class DashModule { }
