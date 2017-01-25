import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CarDetailComponent } from './car-detail.component';
import { CarFormComponent } from './car-form.component';
import { CarsListComponent } from './cars-list.component';

import { CarsRouting } from './cars.routing';

import { CarService } from './car.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CarsRouting
    ],
    declarations: [
        CarDetailComponent,
        CarFormComponent,
        CarsListComponent
    ],
    providers: [
        CarService
    ]
})

export class CarModule {}