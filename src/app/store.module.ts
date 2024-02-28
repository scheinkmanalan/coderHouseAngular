import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { CourseReducer } from './store/reducers/course.reducer'; // Importa el reducer de los cursos
import { CourseEffects } from './store/effects/course.effects'; // Importa los efectos de los cursos

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({
      courses: CourseReducer, 
    }),
    EffectsModule.forRoot([CourseEffects]), 
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ]
})
export class AppStoreModule { }
