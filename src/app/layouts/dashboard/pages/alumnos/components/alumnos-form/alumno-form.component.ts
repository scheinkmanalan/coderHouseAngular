import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.scss',
})
export class AlumnoFormComponent {
  alumnoForm: FormGroup;

  @Output()
  alumnoSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
    } else {
      this.alumnoSubmitted.emit(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }
}
