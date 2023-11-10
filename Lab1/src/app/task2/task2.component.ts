import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Product {
  name: string
  price: number
  isBought?: boolean
}

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  products: Product[] = []

  productForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required])
  })

  addProduct() {
    this.products.push(this.productForm.value)
    this.productForm.reset()
    console.log(this.products)
  }
}
