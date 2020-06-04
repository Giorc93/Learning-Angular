import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Shoe } from '../models/shoe';
import { ShoeService } from '../services/shoe/shoe.service'; //Importing service class from file

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
  providers: [ShoeService], //Implementing the service class
})
//Hooks: Executes at a certain moment on the lifecycle of the component
export class ShoeComponent implements OnInit, DoCheck, OnDestroy {
  public title: string = 'Shoes List';
  public shoes: Array<Shoe>;
  public brands: string[];
  public color: string;
  public nwBrand: string;

  constructor(private _shoeService: ShoeService) {
    //Loading service into constructor
    this.color = 'brown';
    this.brands = new Array();
  }

  //ngOnInit: Executes once the component has been loaded
  ngOnInit(): void {
    console.log('OnInit executed');
    this.shoes = this._shoeService.getShoes(); //Getting data from service through function
    console.log(this.shoes);
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
