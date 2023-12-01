import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-child2',
  template: `
    <p>User name: {{ userName }}</p>
    <p>User age: {{ userAge }}</p>
    <button (click)="change(false)">-</button>
    <button (click)="change(true)">+</button>
  `
})
export class Child2Component {
  @Input() userName: string = ''
  _userAge: number = 0

  @Input()
  set userAge(age: number) { this._userAge = age < 0 ? 0 : age > 100 ? 100 : age }
  get userAge() { return this._userAge }

  @Output() onChanged = new EventEmitter<boolean>
  change(increase: boolean) {
    this.onChanged.emit(increase)
  }
}
