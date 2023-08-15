import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent {
  userInput = '';
  userName = '';
  constructor() {}

  onCreateUser() {
    this.userName = this.userInput;
    this.userInput = '';
  }

  getUserName() {
    return this.userName ? 'Hello ' + this.userName : '';
  }
}
