import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[otherIf]'
})
export class OtherIfDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set otherIf(condition: boolean) {
    if (condition) {
      this.viewContainer.clear()
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }
}
