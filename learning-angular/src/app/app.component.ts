import { Component } from '@angular/core';

@Component({
  //Decorator, modifies the Component class
  selector: 'app-root', //Indicates the HTML element where the Component will appear
  templateUrl: './app.component.html', //Indicates the "view", the HTML file that its used by the Component
  styleUrls: ['./app.component.css'], //Indicates the CSS stylesheet that allows to modify the original CSS
})
export class AppComponent {}
