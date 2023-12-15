import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../services/http.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-pipes3',
  templateUrl: './pipes3.component.html',
  styleUrl: './pipes3.component.scss',
  providers: [HttpService]
})
export class Pipes3Component implements OnInit {
  users: Observable<User[]> | undefined
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.users = this.httpService.getUsers()
  }
}
