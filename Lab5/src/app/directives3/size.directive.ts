import {Directive, HostBinding, Input} from "@angular/core";

@Directive({
  selector: '[size]'
})
export class SizeDirective {

  @Input() fontSize: string = '16px'

  @HostBinding("style.fontSize") get getFontSize() {
    return this.fontSize
  }
}
