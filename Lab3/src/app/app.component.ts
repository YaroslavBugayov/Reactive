import { Component } from '@angular/core';
import {TodoList} from "./todoList";
import {TodoItem} from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private list = new TodoList("Yaroslav", [
    new TodoItem("Do the third laboratory work"),
    new TodoItem("Get some sleep"),
    new TodoItem("Submit laboratory work", true)
  ])

  get username(): string {
    return this.list.user
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete)
    // return this.list.items
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem)
    }
  }

  showComplete: boolean = true
}
