import { Injectable } from '@angular/core';
import { Course } from '../../layout/dashboard/pages/courses/courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseMockupService {
  courseList: Course[] = [
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Curso 1", description: "Descripción del Curso 1", date: new Date() },
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Curso 2", description: "Descripción del Curso 2", date: new Date() },
  ];

  constructor() { }

  add(course: Course): Course[] {
    let id = Date.now() + Math.floor(Math.random() * 100);
    this.courseList.push({ ...course, id });
    return this.courseList;
  }

  delete(id: number): Course[] {
    const filteredCourses = this.courseList.filter(el => el.id !== id);
    this.courseList = [...filteredCourses];
    return this.courseList;
  }

  update(course: Course): void {
    const index = this.courseList.findIndex(el => el.id === course.id);
    this.courseList[index] = course;
  }

  getAll(): Course[] {
    return this.courseList;
  }
}
