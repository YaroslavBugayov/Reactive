import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { title: 'Component 1', url: 'component1' },
    { title: 'Component 2', url: 'component2' },
    { title: 'Component 3', url: 'component3' },
    { title: 'Component 4', url: 'component4' },
    { title: 'Component 5', url: 'component5' },
  ]
}
