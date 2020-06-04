import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Importing the classes from router

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name: string;
  public age: number;
  public nameList: string[];

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.nameList = new Array();
  } //Addign classes to constructor and setting datatype

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      //getting the parameter from URL through the callback function
      this.name = params.name; //setting the value of name on the variable created. params is a json object
      this.age = parseInt(params.age);
      console.log(typeof this.age);
      console.log(this.nameList);
    });
  }

  redirect() {
    this._router.navigate(['shoes']); //_router.navigate: Makes redirection to indicated URL
  }
}
