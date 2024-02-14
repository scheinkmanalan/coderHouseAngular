import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../../../../core/services/course-mockup.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'date', 'delete', 'edit'];
  dataSource: MatTableDataSource<Course>;
  passEdit: Course | null = null;

  constructor(private courseService: CourseService) {
    this.dataSource = new MatTableDataSource<Course>([]);
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getAll().subscribe(
      courses => this.dataSource.data = courses,
      error => console.error('Error loading courses:', error)
    );
  }

  addCourse(course: Course) {
    this.courseService.add(course).subscribe(
      () => {
        this.getCourses(); // Recargar la lista después de agregar el curso
      },
      error => console.error('Error adding course:', error)
    );
  }

  onListChange(): void {
    this.updateList();
  }

  onCourseDelete(id: number): void {
    this.courseService.delete(id).subscribe(
      () => {
        this.getCourses(); // Recargar la lista después de eliminar el curso
      },
      error => console.error('Error deleting course:', error)
    );
  }

  onPressCourseEdit(course: Course): void {
    this.passEdit = course;
  }

  updateList(): void {
    this.getCourses();
  }
}
