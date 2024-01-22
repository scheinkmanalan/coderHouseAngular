import { Injectable } from '@angular/core';
import { Student } from '../../layout/dashboard/pages/students/students.component';

@Injectable({
  providedIn: 'root'
})


export class StudentMockupService {

  studentList: Student[] = [
    {id: Date.now() + Math.floor(Math.random()*100), name: "Roberto", lastname: "abondanzieri", email: "angangan@gmail.com", password: "oledb", role: "ADMIN"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Eugenio", lastname: "Simmons", email: "juano@yahoo.com", password: "surubi", role: "ADMIN"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Pedro", lastname: "Criss", email: "joan@hotmail.com", password: "alabao", role: "USER"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Pablo", lastname: "Frehley", email: "jofrey@gmail.com", password: "pimparabinpinpin", role: "USER"},
    
  ]
  constructor() { }

  addStudent(student:Student): Student[] {
    let id = Date.now() + Math.floor(Math.random()*100);
    this.studentList.push({...student,id})
    return this.studentList
  }

  deleteStudent(id: number): Student[] {
    const dataSourceFiltered = this.studentList.filter(el => el.id != id)
    this.studentList = [...dataSourceFiltered];
    return this.studentList
  }

  updateStudent(student: Student) {
    const index = this.studentList.findIndex(el => el.id == student.id)
    this.studentList[index] = student;
  }

  getAllStudents() {
    return this.studentList
  }
}
