import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Importing FormsModule to enable Two-Way Data Binding
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'; //Importing HTTP module in order to use Ajax Req.

import { AppComponent } from './app.component';
import { VidGameComponent } from './vid-game/vid-game.component';
import { ShoeComponent } from './shoe/shoe.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ExternalComponent } from './external/external.component';
import { TestPipe } from './pipes/test.pipes';

@NgModule({
  declarations: [
    //The set of components, directives, and pipes (declarables) that belong to this module.
    AppComponent,
    VidGameComponent,
    ShoeComponent,
    HomeComponent,
    TestComponent,
    ExternalComponent,
    TestPipe,
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule], // The set of NgModules whose exported declarables are available to templates in this module.
  providers: [appRoutingProviders], // The set of injectable objects that are available in the injector of this module.
  bootstrap: [AppComponent], // The set of components that are bootstrapped when this module is bootstrapped. The components listed here are automatically added to entryComponents.
})
export class AppModule {}
