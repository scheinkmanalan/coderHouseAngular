import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../layout/dashboard/pages/students/students.component';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(
    value: Student,
    mode?: 'uppercase' | 'lowercase',
    ...args: unknown[]
  ): unknown {

    const result = value.lastname + ' ' + value.name;

    switch (mode) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();
      default:
        return result;
    }
  }
}