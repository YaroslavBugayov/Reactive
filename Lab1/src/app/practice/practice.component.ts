import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  name = 'Yaroslav'
  name2 = ''
  counter = 0
  counter2 = 0
  counter3 = 0
  colspan = 3

  increase() {
    this.counter++;
  }

  increase2() {
    this.counter2++;
  }

  increase3($event: any) {
    this.counter3++;
    console.log($event)
  }

  colspanPlus() {
    if (this.colspan < 5) this.colspan++
  }

  colspanMinus() {
    if (this.colspan > 1) this.colspan--
  }
}
