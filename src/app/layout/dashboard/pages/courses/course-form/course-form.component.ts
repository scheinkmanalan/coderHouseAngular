import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../../../core/services/course-mockup.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnChanges {

  courseForm: FormGroup;

  @Output()
  courseListChange = new EventEmitter();

  @Input()
  courseToEdit: any;

  constructor(private fb: FormBuilder, private coursesDb: CourseService) {
    this.courseForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      date: this.fb.control("", Validators.required)
    });
  }

  onSubmit(): void {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
    } else if (!this.courseForm.value.id) {
      this.coursesDb.add(this.courseForm.value);
    } else {
      this.coursesDb.update(this.courseForm.value);
    }
    this.courseListChange.emit();
    this.courseForm.reset();
  }

  ngOnChanges() {
    if (this.courseToEdit) {
      this.courseForm.setValue(this.courseToEdit);
    }
  }
}
