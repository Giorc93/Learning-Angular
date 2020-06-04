import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../services/external/external.service'; //Importing Service

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [ExternalService], // Adding service to providers
})
export class ExternalComponent implements OnInit {
  public user: any = {}; //Setting the user value 'empty' in order to avoid error 'non declared varible' on console
  public user2: any;
  public userId: number;
  public actDate: Date;

  constructor(private _externalService: ExternalService) {} //Declaring priv prop _externalService

  ngOnInit(): void {
    this._externalService.getUser().subscribe(
      //Subscribe method used to get data from observable
      (result) => {
        this.user = result.data; //Setting user variable with data retrieved from request
        console.log(this.user);
      },
      (error) => {
        console.log('Something went wrong on the request');
      }
    );
    this.actDate = new Date();
    console.log(this.actDate);
  }

  getUserById(id) {
    this._externalService.getThisUser(id).subscribe(
      (result) => {
        this.user2 = result.data; //Setting user variable with data retrieved from request
        console.log(this.user2);
      },
      (error) => {
        console.log('Something went wrong on the request');
      }
    );
  }
}
