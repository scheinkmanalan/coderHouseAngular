import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { StudentMockupService } from '../../../../core/services/student-mockup.service';
import { Route } from '@angular/router';
import { Student } from '../../../dashboard/pages/students/students.component';
import { AuthService } from '../../../../core/services/auth.service';

export interface LoginData {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  studentLoggedIn: Student | null = null
  error: string | null = null

  constructor(private authService: AuthService) {
  }

  onSubmitedForm(loginData: LoginData) {
    this.authService.login(loginData)
    this.error = this.authService.error
  }



}