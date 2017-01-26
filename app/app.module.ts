import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { AboutComponent } from './about.component';

import { CarModule } from './cars/cars.module';

import { Routing } from './app.routing';


@NgModule({
    imports: [BrowserModule, Routing, CarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}