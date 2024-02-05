import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonMockupService } from '../../../../../core/services/lesson-mockup.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})
export class LessonFormComponent implements OnChanges {

  lessonForm: FormGroup;

  @Output()
  lessonListChange = new EventEmitter();

  @Input()
  lessonToEdit: any;

  constructor(private fb: FormBuilder, private lessonsDb: LessonMockupService) {
    this.lessonForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      date: this.fb.control("", Validators.required)
    });
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

  ngOnChanges() {
    if (this.lessonToEdit) {
      this.lessonForm.setValue(this.lessonToEdit);
    }
  }
}
