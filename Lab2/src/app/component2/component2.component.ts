import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html'
})
export class Component2Component {
  name: string = 'Anatoliy'
  age: number = 56
  clicks: number = 0

  onChanged(increased: boolean) {
    increased ? this.clicks++ : this.clicks--
  }
}
