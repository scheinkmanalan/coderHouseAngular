import { createAction, props } from '@ngrx/store';
import { Course } from '../../core/services/course-mockup.service';

// Acción para cargar todos los cursos
export const loadCourses = createAction('[Course] Load Courses');

// Acción para cargar todos los cursos exitosamente
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

// Acción para cargar todos los cursos fallida
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: any }>()
);

// Otras acciones relacionadas con los cursos, como agregar, actualizar, eliminar, etc.
