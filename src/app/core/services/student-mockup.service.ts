import { Injectable } from '@angular/core';
import { Student } from '../../layout/dashboard/pages/students/students.component';

@Injectable({
  providedIn: 'root'
})


export class StudentMockupService {

  studentList: Student[] = [
    {id: Date.now() + Math.floor(Math.random()*100), name: "Roberto", lastname: "abondanzieri", email: "angangan@gmail.com", password: "oledb", role: "ADMIN"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Juan", lastname: "Suarez", email: "jofrey@gmail.com", password: "pimparabinpinpin", role: "USER"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Albert", lastname: "Einstein", email: "albert@gmail.com", password: "pimparabinpinpin", role: "USER"},    
  ]
  constructor() { }

  add(student:Student): Student[] {
    let id = Date.now() + Math.floor(Math.random()*100);
    this.studentList.push({...student,id})
    return this.studentList
  }

  delete(id: number): Student[] {
    const dataSourceFiltered = this.studentList.filter(el => el.id != id)
    this.studentList = [...dataSourceFiltered];
    return this.studentList
  }

  update(student: Student) {
    const index = this.studentList.findIndex(el => el.id == student.id)
    this.studentList[index] = student;
  }

  getAll() {
    return this.studentList
  }
}
