import { Component } from '@angular/core';
import { config } from './models/config'; //Importing crated element

@Component({
  //Decorator, modifies the Component class
  selector: 'app-root', //Indicates the HTML element where the Component will appear
  templateUrl: './app.component.html', //Indicates the "view", the HTML file that its used by the Component
  styleUrls: ['./app.component.css'], //Indicates the CSS stylesheet that allows to modify the original CSS
})
export class AppComponent {
  public show: boolean = true;
  public title: string;

  constructor() {
    this.title = config.title;
  }

  hideList() {
    this.show = false;
  }

  showList() {
    this.show = true;
  }
}
