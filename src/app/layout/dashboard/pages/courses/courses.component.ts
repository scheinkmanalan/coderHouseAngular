import { Component, OnInit } from '@angular/core';
import { CourseMockupService } from '../../../../core/services/course-mockup.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Course {
  id: number;
  name: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'date', 'delete', 'edit'];
  dataSource: MatTableDataSource<Course>;
  passEdit: Course | null = null;

  constructor(private courseService: CourseMockupService) {
    // Agrega algunos registros iniciales aquí si es necesario
    const initialCourses: Course[] = [
      { id: 1, name: 'Curso Inicial 1', description: 'Descripción del Curso Inicial 1', date: new Date() },
      { id: 2, name: 'Curso Inicial 2', description: 'Descripción del Curso Inicial 2', date: new Date() }
    ];

    this.dataSource = new MatTableDataSource<Course>(initialCourses);
  }
  
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getAll().subscribe(
      courses => this.dataSource.data = courses, // Usamos 'data' de MatTableDataSource para asignar los cursos
      error => console.error('Error loading courses:', error)
    );
  }

  addCourse(course: Course) {
    this.courseService.add(course).subscribe(
      updatedCourses => {
        this.dataSource.data = updatedCourses;
      },
      error => console.error('Error adding course:', error)
    );
  }

  onListChange(): void {
    this.updateList();
  }

  onCourseDelete(id: number): void {
    this.courseService.delete(id);
    this.updateList();
  }

  onPressCourseEdit(course: Course): void {
    this.passEdit = course;
  }

  updateList(): void {
    this.getCourses();
  }
}
