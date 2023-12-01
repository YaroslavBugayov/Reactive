import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-child3',
  template: `
    <label for="Enter your name"></label>
    <input [ngModel]="userName" (ngModelChange)="onNameChanged($event)" placeholder="name">
  `
})
export class Child3Component {
  @Input() userName: string = ''
  @Output() userNameChange = new EventEmitter<string>()
  onNameChanged(name: string) {
    this.userName = name
    this.userNameChange.emit(name)
  }
}
