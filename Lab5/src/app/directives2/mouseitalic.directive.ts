import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[mouseitalic]'
})
export class MouseitalicDirective {
  private fontStyle: string = 'normal'

  @HostBinding('style.font-style') get getFontStyle(): string {
    return this.fontStyle
  }

  @HostBinding('style.cursor') get getCursor(): string {
    return "pointer"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontStyle = 'italic'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontStyle = 'normal'
  }
}
