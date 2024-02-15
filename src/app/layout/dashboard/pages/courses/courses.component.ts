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
      newCourse => {
        this.dataSource.data.push(newCourse);
        this.dataSource._updateChangeSubscription();
      },
      error => console.error('Error adding course:', error)
    );
  }

  updateCourse(course: Course) {
    this.courseService.update(course).subscribe(
      updatedCourse => {
        const index = this.dataSource.data.findIndex(c => c.id === updatedCourse.id);
        if (index !== -1) {
          this.dataSource.data[index] = updatedCourse;
          this.dataSource._updateChangeSubscription();
        }
      },
      error => console.error('Error updating course:', error)
    );
  }

  deleteCourse(id: number) {
    this.courseService.delete(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
        this.dataSource._updateChangeSubscription();
      },
      error => console.error('Error deleting course:', error)
    );
  }

  onListChange(): void {
    // No necesitamos hacer nada aquí porque el MatTableDataSource se actualiza automáticamente
  }

  onPressCourseEdit(course: Course): void {
    this.passEdit = course;
  }
}
