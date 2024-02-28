import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashModule } from './layout/dashboard/dashboard.module';
import { FullNamePipe } from './shared/full-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './core/services/course-mockup.service';
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects'; 
import { CourseEffects } from './store/effects/course.effects';
import { CourseReducer } from './store/reducers/course.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashModule,
    StoreModule.forRoot({ courses: CourseReducer }), // Configura el Store principal y agrega el reducer de curso
    EffectsModule.forRoot([CourseEffects]) // Configura los Effects principales y agrega los efectos de curso
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
