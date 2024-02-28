import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CourseState } from '../reducers/course.reducer';

// Selector para obtener el estado de los cursos
export const selectCourseState = createFeatureSelector<CourseState>('courses');

// Selector para obtener todos los cursos
export const selectAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

// Selector para verificar si los cursos están cargando
export const selectCoursesLoading = createSelector(
  selectCourseState,
  state => state.loading
);

// Selector para obtener el error al cargar los cursos
export const selectCoursesError = createSelector(
  selectCourseState,
  state => state.error
);

// Otros selectores relacionados con los cursos, como obtener un curso por ID, etc.
