import { Component, OnInit } from '@angular/core';
import { LessonMockupService } from '../../../../core/services/lesson-mockup.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Lesson {
  id: number;
  name: string;
  description: string;
  date: Date;
  courseId: number;
}

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'date', 'delete', 'edit'];
  dataSource: MatTableDataSource<Lesson>;
  passEdit: Lesson | null = null;

  
  constructor(private lessonService: LessonMockupService) {

    const initialLessons: Lesson[] = [
    ];

    this.dataSource = new MatTableDataSource<Lesson>(initialLessons);
  }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonService.getAll().subscribe(
      lessons => this.dataSource.data = lessons, 
      error => console.error('Error loading lessons:', error)
    );
  }

  addLesson(lesson: Lesson) {
    this.lessonService.add(lesson).subscribe(
      updatedLessons => {
        this.dataSource.data = updatedLessons;
      },
      error => console.error('Error adding lesson:', error)
    );
  }

  onListChange(): void {
    this.updateList();
  }

  onLessonDelete(id: number): void {
    this.lessonService.delete(id);
    this.updateList();
  }

  onPressLessonEdit(lesson: Lesson): void {
    this.passEdit = lesson;
  }

  updateList(): void {
    this.getLessons();
  }
}
