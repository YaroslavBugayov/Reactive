import { Component } from '@angular/core';

@Component({
  selector: 'app-directives4',
  templateUrl: './directives4.component.html',
  styleUrl: './directives4.component.scss'
})
export class Directives4Component {
  condition: boolean = true
  dayOfWeek: number = 1
  items: string[] = ['Carrot', 'Cucumber', 'Juice', 'Spaghetti', 'Some alcohol']

  toggle() {
    this.condition = !this.condition
  }

  nextDay() {
    this.dayOfWeek++
  }

  previousDay() {
    this.dayOfWeek--
  }
}
