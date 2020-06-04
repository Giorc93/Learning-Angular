import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public identified: boolean;

  constructor() {
    this.identified = false;
  }

  ngOnInit(): void {}

  logIn() {
    this.identified = true;
  }

  logOut() {
    this.identified = false;
  }
}
