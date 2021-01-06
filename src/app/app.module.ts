import { RouterModule } from "@angular/router";
import { CarsModule } from "./cars/cars.module";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CarService } from './cars/car.service';
import { APPCONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule
  ],
  providers: [CarService, {provide: APPCONFIG.CARS_API_URL, useValue: APPCONFIG.CARS_API_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
