import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './layout/dashboard/pages/courses/courses.component';
import { DashComponent } from './layout/dashboard/dashboard.component';
import { StudentsComponent } from './layout/dashboard/pages/students/students.component';
import { LessonsComponent } from './layout/dashboard/pages/lessons/lessons.component';

const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'lessons', component: LessonsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
