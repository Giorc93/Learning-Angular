import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VidGameComponent } from './vid-game/vid-game.component';
import { ShoeComponent } from './shoe/shoe.component';

@NgModule({
  declarations: [
    //The set of components, directives, and pipes (declarables) that belong to this module.
    AppComponent,
    VidGameComponent,
    ShoeComponent,
  ],
  imports: [BrowserModule], // The set of NgModules whose exported declarables are available to templates in this module.
  providers: [], // The set of injectable objects that are available in the injector of this module.
  bootstrap: [AppComponent], // The set of components that are bootstrapped when this module is bootstrapped. The components listed here are automatically added to entryComponents.
})
export class AppModule {}
