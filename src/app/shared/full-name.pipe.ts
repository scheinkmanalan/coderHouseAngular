import { Pipe, PipeTransform } from '@angular/core';

export interface PersonaPipe {
  firstName: string;
  lastName: string;
}

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(
    value: PersonaPipe,
    mode?: 'uppercase' | 'lowercase',
    ...args: unknown[]
  ): unknown {

    console.log(args);
    const result = value.lastName + ' ' + value.firstName;

    if (mode === 'uppercase') {
      return result.toUpperCase();
    }

    return result;
  }
}
