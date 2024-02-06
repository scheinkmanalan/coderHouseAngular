import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course, CourseMockupService } from '../../../../../core/services/course-mockup.service';  
import { Lesson, LessonMockupService } from '../../../../../core/services/lesson-mockup.service'; 

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})

export class LessonFormComponent implements OnChanges, OnInit {
  lessonForm: FormGroup;
  courses: Course[] = [];

  @Output() lessonListChange = new EventEmitter();
  @Input() lessonToEdit: any;

  constructor(
    private fb: FormBuilder,
    private lessonsDb: LessonMockupService,
    private courseService: CourseMockupService 
  ) {
    this.lessonForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      date: this.fb.control("", Validators.required),
      courseId: this.fb.control("", Validators.required)
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getAll().subscribe(
      courses => {
        this.courses = courses;
        console.log('Courses:', this.courses);       },
      error => console.error('Error loading courses:', error)
    );
  }

  onSubmit(): void {
    if (!this.lessonForm.valid) {
      this.lessonForm.markAllAsTouched();
    } else if (!this.lessonForm.value.id) {
      this.lessonsDb.add(this.lessonForm.value);
    } else {
      this.lessonsDb.update(this.lessonForm.value);
    }
    this.lessonListChange.emit();
    this.lessonForm.reset();
  }

  ngOnChanges(): void {
    if (this.lessonToEdit) {
      this.lessonForm.setValue(this.lessonToEdit);
    }
  }
}
