import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-child4',
  template: '<p>Hello, {{ name }}</p>'
})
export class Child4Component implements OnInit, OnChanges {
  @Input() name: string = 'Anatoliy'

  constructor() {
    console.log('Constructor')
  }

  ngOnInit() {
    console.log('OnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      let change = changes[prop]
      let current = JSON.stringify(change.currentValue)
      let previous = JSON.stringify(change.previousValue)
      this.log(`${prop}: currentValue = ${current}, previousValue = ${previous}`)
    }
  }

  private log(message: string) {
    console.log(message)
  }

}
