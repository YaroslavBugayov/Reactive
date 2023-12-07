import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[sum]'
})
export class SumDirective implements OnInit{

  private number1: number = 0
  private number2: number = 0

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    const result: number = this.number1 + this.number2
    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: result })
  }

  @Input() set sumFrom(number1: number) {
    this.number1 = number1
  }

  @Input() set sumAnd(number2: number) {
    this.number2 = number2
  }
}
