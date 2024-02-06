import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

export interface Course {
  id: number;
  name: string;
  description: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CourseMockupService {
  private courseList: Course[] = [
    { id: 1, name: 'Curso Inicial 1', description: 'Descripción del Curso 1', date: new Date() },
    { id: 2, name: 'Curso Inicial 2', description: 'Descripción del Curso 2', date: new Date() }
  ];

  private coursesSubject = new Subject<Course[]>();

  courses$: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor() { }

  getAll(): Observable<Course[]> {
    this.coursesSubject.next(this.courseList);
    return of(this.courseList);
  }

  add(course: Course): Observable<Course[]> {
    course.id = Date.now() + Math.floor(Math.random() * 100);
    this.courseList.push(course);
    this.coursesSubject.next(this.courseList); 
    return of([...this.courseList]);
  }

  delete(id: number): Observable<Course[]> {
    this.courseList = this.courseList.filter(course => course.id !== id);
    this.coursesSubject.next(this.courseList); 
    return of([...this.courseList]);
  }

  update(course: Course): Observable<void> {
    const index = this.courseList.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courseList[index] = course;
      this.coursesSubject.next(this.courseList); 
    }
    return of();
  }
}
