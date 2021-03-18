import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeFont]'
})
export class ChangeFontDirective {

  @Input('appChangeFont') color!: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onClick(): void {
    this.render.setStyle(this.el.nativeElement, 'border', '2px solid');
    this.render.setStyle(this.el.nativeElement, 'borderColor', this.color);
    this.render.setStyle(this.el.nativeElement, 'font-size', '12px');
  }

}
