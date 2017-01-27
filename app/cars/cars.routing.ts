import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailComponent } from './car-detail.component';
import { CarFormComponent } from './car-form.component';
import { CarsListComponent } from './cars-list.component';
import { CarEditComponent } from './car-edit.component';

const carsRoutes: Routes = [
    {path: 'cars', component: CarsListComponent},
    {path: 'car/create', component: CarFormComponent},
    {path: 'car/:id', component: CarDetailComponent},
    {path: 'caredit/:id', component: CarEditComponent}
];

 @NgModule ({
     imports: [ RouterModule.forChild(carsRoutes) ],
     exports: [ RouterModule ]
 })

export class CarsRouting {}