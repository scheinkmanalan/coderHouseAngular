import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './layout/dashboard/pages/courses/courses.component';
import { DashComponent } from './layout/dashboard/dashboard.component';
import { StudentsComponent } from './layout/dashboard/pages/students/students.component';

const routes: Routes = [
  { path: '', component: DashComponent, children: [
    { path: 'cursos', component: CoursesComponent },
    { path: 'students', component: StudentsComponent },
    // { path: 'seguridad', component: SecurityComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
