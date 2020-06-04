//Importing Modules from Angular Router

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing Components

import { ShoeComponent } from './shoe/shoe.component';
import { VidGameComponent } from './vid-game/vid-game.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ExternalComponent } from './external/external.component';

//Creating routing configuration array;

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shoe', component: ShoeComponent },
  { path: 'vidGame', component: VidGameComponent },
  { path: 'test', component: TestComponent }, //In order to make the variable optional it is necessary to create another routing path without  the variable
  { path: 'test/:name/:age', component: TestComponent }, //Sending data through URL
  { path: 'external', component: ExternalComponent },
  { path: '**', component: HomeComponent }, //404 route, always declare on the end
];

//Exporting Router Module

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
