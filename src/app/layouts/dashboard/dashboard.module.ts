import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AlumnosModule } from './pages/users/alumnos.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { PipesModule } from './pages/pipes/pipes.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AlumnosModule,
    CategoriesModule,
    PipesModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
