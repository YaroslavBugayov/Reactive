import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck, Input,
  OnChanges, OnInit, SimpleChanges
} from "@angular/core";

@Component({
  selector: 'app-child5',
  template: ''
})
export class Child5Component implements
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
{
  @Input() name: string = ''
  count: number = 1

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  private log(message: string) {
    console.log(`${this.count}. ${message}`)
    this.count++
  }
}
