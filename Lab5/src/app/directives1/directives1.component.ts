import { Component } from '@angular/core';

@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrl: './directives1.component.scss'
})
export class Directives1Component {
  isVerdana: boolean = true
  isSegoe: boolean = true
  isNavy: boolean = true
  visibility: boolean = false

  currentClass = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy
  }

  toggle() {
    this.visibility = !this.visibility
  }
}
