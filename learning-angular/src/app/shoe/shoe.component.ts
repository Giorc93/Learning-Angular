import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Shoe } from '../models/shoe';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})
//Hooks: Executes at a certain moment on the lifecycle of the component
export class ShoeComponent implements OnInit, DoCheck, OnDestroy {
  public title: string = 'Shoes List';
  public shoes: Array<Shoe>;
  public brands: string[];
  public color: string;
  public nwBrand: string;

  constructor() {
    this.color = 'brown';
    this.brands = new Array();
    this.shoes = [
      new Shoe('Reebok Classic', 'Reebook', 'White', 40.99, true),
      new Shoe('Adidas Samba', 'Adidas', 'Black', 19.99, true),
      new Shoe('Adidas Pace', 'Adidas', 'White', 50.99, true),
      new Shoe('Adidas Runner', 'Adidas', 'White', 29.99, true),
    ];
  }

  //ngOnInit: Executes once the component has been loaded
  ngOnInit(): void {
    console.log('OnInit executed');
    this.listBrands();
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

  listBrands() {
    this.shoes.forEach((shoe, index) => {
      if (this.brands.indexOf(shoe.brand) < 0) {
        //If the element already exits, skips the push method to avoid duplicates
        this.brands.push(shoe.brand);
      }
    });
    console.log(this.brands);
  }

  addBrand() {
    if (this.brands.indexOf(this.nwBrand) < 0) {
      this.brands.push(this.nwBrand);
    }
  }

  rmvBrand(id) {
    this.brands.splice(id, 1);
  }

  onBlur() {
    console.log('Out of the box');
  }

  altWord() {
    alert(this.nwBrand);
  }
}
