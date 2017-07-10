import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[structure-directive-ionic]' // Attribute selector
})
export class StructureDirectiveIonicDirective {

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#819FF7';
    this.elementRef.nativeElement.style.color = '#FFFFFF';
  }

}
