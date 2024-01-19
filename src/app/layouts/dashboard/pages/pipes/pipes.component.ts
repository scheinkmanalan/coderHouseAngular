import { Component } from '@angular/core';
import { FullNamePipe, UserPipe } from '../../../../shared/full-name.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  today = new Date();
  price = 10000;

  alumno: UserPipe = {
    firstName: 'Alan',
    lastName: 'ShakeShake',
  };

  constructor(private datePipe: DatePipe, private fullName: FullNamePipe) {
    console.log(this.datePipe.transform(this.today, 'long'));
    console.log(this.fullName.transform(this.alumno));
  }
}
