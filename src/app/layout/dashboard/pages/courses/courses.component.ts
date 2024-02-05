import { Component } from '@angular/core';
import { CourseMockupService } from '../../../../core/services/course-mockup.service';

export interface Course {
    id: number;
    name: string;
    description: string;
    date: Date;
  }

  @Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss'
  })
  
export class CoursesComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'date', 'delete', 'edit'];
  dataSource = this.coursesDb.getAll();
  passEdit: Course | null = null;

  constructor(private coursesDb: CourseMockupService) { }

  onListChange(): void {
    this.updateList();
  }

  onCourseDelete(id: number): void {
    this.coursesDb.delete(id);
    this.updateList();
  }

  onPressCourseEdit(course: Course): void {
    this.passEdit = course;
  }

  updateList(): void {
    this.dataSource = [...this.coursesDb.getAll()];
  }
}
