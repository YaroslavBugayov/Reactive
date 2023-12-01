import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html'
})
export class Component4Component implements OnChanges {
  name: string = 'Anatoliy'
  age: number = 53

  ngOnChanges(changes: SimpleChanges): void {
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
