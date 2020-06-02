import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})
//Hooks: Executes at a certain moment on the lifecycle of the component
//ngOnInit: Executes once the component has been loaded
//ngDoCheck: Executes everytime any change on the component or the app is made
export class ShoeComponent implements OnInit, DoCheck {
  public model: string = 'Nike Air-Jordan';

  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {}
}
