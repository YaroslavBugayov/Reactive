import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[hostmousebold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HostmouseboldDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer')
  }

  onMouseEnter() {
    this.setFontWeight('bold')
  }

  onMouseLeave() {
    this.setFontWeight('normal')
  }

  private setFontWeight(style: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', style)
  }
}
