import { EventEmitter, Injectable, Output } from '@angular/core';
import { Student } from '../../layout/dashboard/pages/students/students.component';
import { StudentMockupService } from './student-mockup.service';
import { LoginData } from '../../layout/auth/pages/login/login.component';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    studentLoggedIn: Student | null = null
    error: string | null = null

    constructor(private studentDb: StudentMockupService, private router: Router) {
    }

    login(loginData: LoginData) {
        this.studentDb.getAllStudents().subscribe({
            next: (students) => {
                let studentFind = students.find(student => student.email == loginData.email && student.password == loginData.password)
                if (studentFind) {
                    this.studentLoggedIn = studentFind
                    localStorage.setItem("userToken", "user token")
                    this.router.navigate(["courses"])
                }
                else {
                    this.error = "No se encontro el usuario"
                    this.router.navigate(["login"])
                    console.log(this.error)
                }
            }
        })
    }

    logout() {
        this.studentLoggedIn = null
        localStorage.removeItem("userToken")
        this.router.navigate(["login"])
    }

}