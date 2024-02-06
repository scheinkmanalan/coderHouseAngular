import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

export interface Lesson {
  id: number;
  name: string;
  description: string;
  date: Date;
  courseId: number;  // Agregamos el campo courseId
}

@Injectable({
  providedIn: 'root'
})
export class LessonMockupService {
  private lessonList: Lesson[] = [];
  private lessonsSubject = new Subject<Lesson[]>();

  lessons$: Observable<Lesson[]> = this.lessonsSubject.asObservable();

  constructor() {}

  getAll(): Observable<Lesson[]> {
    this.lessonsSubject.next(this.lessonList);
    return of(this.lessonList);
  }

  add(lesson: Lesson): Observable<Lesson[]> {
    lesson.id = Date.now() + Math.floor(Math.random() * 100);
    lesson.courseId = this.getRandomCourseId();  // Asignamos courseId al azar
    this.lessonList.push(lesson);
    this.lessonsSubject.next(this.lessonList);
    return of([...this.lessonList]);
  }

  delete(id: number): Observable<Lesson[]> {
    this.lessonList = this.lessonList.filter(lesson => lesson.id !== id);
    this.lessonsSubject.next(this.lessonList);
    return of([...this.lessonList]);
  }

  update(lesson: Lesson): Observable<void> {
    const index = this.lessonList.findIndex(c => c.id === lesson.id);
    if (index !== -1) {
      this.lessonList[index] = lesson;
      this.lessonsSubject.next(this.lessonList);
    }
    return of();
  }

  private getRandomCourseId(): number {
    // Implementa lógica para obtener courseId por ahora aleatorio al no tener base de datos.
    return Math.floor(Math.random() * 10) + 1; 
  }
}
