// course-mockup.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  private apiUrl = 'http://localhost:4200/courses';
  courseList: Course[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
      .pipe(
        tap(courses => this.courseList = courses),
        catchError(error => {
          console.error('Error fetching courses:', error);
          return of([]);
        })
      );
  }
  

  add(course: Course): Observable<Course[]> {
    return this.http.post<Course>(this.apiUrl, course)
      .pipe(
        switchMap((newCourse: Course) => {
          this.courseList.push(newCourse);
          return of([...this.courseList]); // Devolvemos una nueva instancia de la lista
        }),
        catchError(error => {
          console.error('Error adding course:', error);
          return of(this.courseList);
        })
      );
  }
  


  delete(id: number): Observable<Course[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        switchMap(() => {
          this.courseList = this.courseList.filter(course => course.id !== id);
          return of(this.courseList);
        }),
        catchError(error => {
          console.error('Error deleting course:', error);
          return of(this.courseList);
        })
      );
  }


  update(course: Course): Observable<void> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<void>(url, course)
      .pipe(
        catchError(error => {
          console.error('Error updating course:', error);
          return of();
        })
      );
  }
}
