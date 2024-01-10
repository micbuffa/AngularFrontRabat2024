import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]',
  standalone: true
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "green";
    //el.nativeElement.style.border = "2px solid yellow";
    // etc. on peut modifier le CSS...
  }

}
