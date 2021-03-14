import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  @Input('appChangeBackground') color!: string;

  @HostBinding('style.background-color') elColor: string | null = null;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elColor = null;
  }

}
