import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './layout/dashboard/pages/courses/courses.component';
import { DashComponent } from './layout/dashboard/dashboard.component';
import { StudentsComponent } from './layout/dashboard/pages/students/students.component';
import { LessonsComponent } from './layout/dashboard/pages/lessons/lessons.component';
import { authGuard } from './core/services/guards/auth.guards';

// const routes: Routes = [
//     { path: 'courses', component: CoursesComponent },
//     { path: 'students', component: StudentsComponent },
//     { path: 'lessons', component: LessonsComponent  },
// ];

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./layout/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'courses', component: CoursesComponent,
    canActivate: [authGuard]
  },
  {
    path: "students",
    component: StudentsComponent,
    canActivate: [authGuard]
  },
  {
    path: "lessons",
    component: StudentsComponent,
    canActivate: [authGuard]
  },
  {
    path: "**",
    redirectTo: "courses"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
