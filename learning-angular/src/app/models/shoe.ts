export class Shoe {
  //This way the constructor automaticaly assings the values given on the arguments
  constructor(
    public model: string,
    public brand: string,
    public color: string,
    public price: number,
    public onStock: boolean
  ) {}
}

/*
  public model: string;
  public brand: string;
  public color: string;
  public price: number;
  public onStock: boolean;

  constructor(model,brand,color,price,onStock) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.onStock = onStock;
  }*/
