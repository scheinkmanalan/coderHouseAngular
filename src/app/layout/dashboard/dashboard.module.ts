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

import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonsModule } from './pages/lessons/lessons.module';

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
    LessonsModule,
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
      {
        // /dashboard/lessons
        path: 'lessons',
        loadChildren: () =>
          import('./pages/lessons/lessons.module').then(
            (m) => m.LessonsModule
          ),
      },
    ]),
  ],
  exports: [DashComponent],
})
export class DashModule { }
