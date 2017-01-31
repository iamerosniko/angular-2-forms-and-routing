import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

import { CarModule } from './cars/cars.module';
import { FileModule } from './file/file.module';

import { AppRouting } from './app.routing';


@NgModule({
    imports: [BrowserModule, CarModule, FileModule, AppRouting],
    declarations: [AppComponent, AboutComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}