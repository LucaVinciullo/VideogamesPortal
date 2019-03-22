import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEnter]'
})
export class MouseEnterDirective {
  constructor(private el: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

}
