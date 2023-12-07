import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { title: 'Directives1', url: 'directives1' },
    { title: 'Directives2', url: 'directives2' },
    { title: 'Directives3', url: 'directives3' },
    { title: 'Directives4', url: 'directives4' },
    { title: 'Directives5', url: 'directives5' },
    { title: 'Directives6', url: 'directives6' }
  ]
}
