import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input('appHover') color = 'blue';

  constructor(private element: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
