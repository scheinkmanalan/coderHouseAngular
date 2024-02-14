import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  add(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  update(course: Course): Observable<void> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<void>(url, course);
  }
}
