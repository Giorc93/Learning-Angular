import { Injectable } from '@angular/core';
import { Shoe } from 'src/app/models/shoe'; //Importing de model

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  public shoes: Array<Shoe>; //Setting datatype

  constructor() {
    this.shoes = [
      new Shoe('Reebok Classic', 'Reebook', 'White', 40.99, true),
      new Shoe('Adidas Samba', 'Adidas', 'Black', 39.99, true),
      new Shoe('Adidas Pace', 'Adidas', 'White', 50.99, true),
      new Shoe('Adidas Runner', 'Adidas', 'White', 29.99, true),
    ];
  }

  getShoes(): Array<Shoe> {
    return this.shoes;
  }
}
