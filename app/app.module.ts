import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CarFormComponent} from './car-form.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CarFormComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}