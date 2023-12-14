import { Component } from '@angular/core';
import {interval, Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes2',
  templateUrl: './pipes2.component.html',
  styleUrl: './pipes2.component.scss'
})
export class Pipes2Component {
  num: number = 5.42
  pizzaIngredients: string[] = ['Tomato', 'Sausage', 'Cheese', 'Sauce']
  pizzaIngredient: Observable<string> | undefined

  constructor() {
    this.showIngredients()
  }

  showIngredients() {
    this.pizzaIngredient = interval(1000).pipe(map((i: number) => this.pizzaIngredients[i]))
  }
}
