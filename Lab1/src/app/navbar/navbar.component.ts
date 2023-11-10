import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { title: 'Task1', url: 'task1' },
    { title: 'Task2', url: 'task2' },
    { title: 'Task3', url: 'task3' },
    { title: 'Task4', url: 'task4' }
  ]
}
