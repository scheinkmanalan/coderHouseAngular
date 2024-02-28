import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CourseService } from '../../core/services/course-mockup.service';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CourseActions from '../actions/course.actions'; 


@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.loadCourses),
    mergeMap(() => this.courseService.getAll()
      .pipe(
        map(courses => CourseActions.loadCoursesSuccess({ courses })),
        catchError(error => of(CourseActions.loadCoursesFailure({ error })))
      )
    )
  ));

  // Otros efectos relacionados con los cursos, como agregar, actualizar, eliminar, etc.

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
