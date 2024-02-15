import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid


export interface Course {
  id: number;
  name: string;
  description: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  private courses$: BehaviorSubject<Course[]>;

  constructor(private httpClient: HttpClient) {
    this.courses$ = new BehaviorSubject<Course[]>([]);
    this.updateAndEmitBehavior()
  }

  get coursesObs$() {
    return this.courses$.asObservable();
  }

  private updateAndEmitBehavior() {
    this.httpClient.get<Course[]>(this.apiUrl).subscribe({ next: (data) => { this.courses$.next(data) } })
  }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.apiUrl)
  }

  add(course: Course) {
    const id: number = parseInt(uuidv4(), 16);
    course.id = id;
    return this.httpClient.post(this.apiUrl, course).subscribe({ next: () => this.updateAndEmitBehavior() });
  }


  // update(course: Course): Observable<Course> {
  //   const url = `${this.apiUrl}/${course.id}`;
  //   return this.httpClient.put<Course>(url, course);
  // }

  update(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.httpClient.put<Course>(url, course).pipe(
      tap(() => this.updateAndEmitBehavior())
    );
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
