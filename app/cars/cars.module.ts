import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CarDetailComponent } from './car-detail.component';
//import { CarFormComponent } from './car-form.component';
import { CarsListComponent } from './cars-list.component';

import { CarService } from './car.service';

import { CarsRouting } from './cars.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CarsRouting
    ],
    declarations: [
        CarDetailComponent,
        CarsListComponent
    ],
    providers: [
        CarService
    ]
})

export class CarModule {}