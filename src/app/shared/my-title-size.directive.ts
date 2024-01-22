import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-title-size]'
})
export class MyTitleSizeDirective {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.fontSize = '20px';
  }

}