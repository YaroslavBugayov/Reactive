import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-child',
  template: `
    <h3>{{ title }}</h3>
    <ng-content></ng-content>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>
  `,
  styles: ['h3 { color: #039be5; font-family: Verdana, sans-serif }', 'p { color: brown }']
})
export class ChildComponent {
  title: string = 'Example of using a child component'
  @Input() username: string = ''
  @Input() email: string = ''
}
