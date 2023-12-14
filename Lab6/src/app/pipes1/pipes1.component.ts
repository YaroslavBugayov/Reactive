import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  templateUrl: './pipes1.component.html',
  styleUrl: './pipes1.component.scss'
})
export class Pipes1Component {
  myDate: Date = new Date(2023, 11, 13)
  currentDate: Date = new Date();
  num: number = 5.42
  numString: string = "5.6"
  name: string = 'Anatoliy'
  pizzaIngredients: string[] = ['Tomato', 'Sausage', 'Cheese', 'Sauce']
}
