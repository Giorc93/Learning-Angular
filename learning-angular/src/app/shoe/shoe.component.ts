import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})
//Hooks: Executes at a certain moment on the lifecycle of the component
export class ShoeComponent implements OnInit, DoCheck, OnDestroy {
  public title: string = 'Shoes List';
  public shoes: Array<Shoe>;

  constructor() {
    this.shoes = [
      new Shoe('Reebok Classic', 'Reebook', 'White', 40.99, true),
      new Shoe('Adidas Samba', 'Adidas', 'Black', 40.99, true),
      new Shoe('Adidas Pace', 'Adidas', 'White', 50.99, true),
    ];
  }

  //ngOnInit: Executes once the component has been loaded
  ngOnInit(): void {
    console.log('OnInit executed');
    console.log(this.shoes);
  }
  //ngDoCheck: Executes everytime any change on the component or the app is made
  ngDoCheck(): void {
    console.log('DoCheck executed');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy executed');
  }

  setTitle() {
    this.title = 'Shoe List & Description';
  }
}
