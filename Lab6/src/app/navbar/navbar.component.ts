import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { title: 'Pipes1', url: 'pipes1' },
    { title: 'Pipes2', url: 'pipes2' },
    { title: 'Pipes3', url: 'pipes3' },
  ]
}
