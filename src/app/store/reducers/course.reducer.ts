import { createReducer, on, Action } from '@ngrx/store';
import * as CourseActions from '../actions/course.actions';
import { Course } from '../../core/services/course-mockup.service';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: any;
}

export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

const courseReducer = createReducer(
  initialState,

  on(CourseActions.loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

);

export function CourseReducer(state: CourseState | undefined, action: Action) {
  return courseReducer(state, action);
}
