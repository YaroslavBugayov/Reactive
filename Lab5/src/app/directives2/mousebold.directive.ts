import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[mousebold]'
})
export class MouseboldDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal')
  }

  private setFontWeight(style: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', style)
  }
}
