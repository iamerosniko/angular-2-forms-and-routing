import { Component } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    selector: 'car-form',
    templateUrl: 'car-form.component.html'
})

export class CarFormComponent {
    submitted = false;
    fuelTypes = [
        'Petrol',
        'Diesel',
        'Hybrid',
        'Electric'
    ];
    bodyStyle = [
        'Convertibles',
        'Coupes',
        'Hatchbacks',
        'Vans',
        'Sedans',
        'Suvs',
        'Trucks',
        'Wagons'
    ];
    model = new Car(0, '', '');

    constructor(
        private carService: CarService
    ){}

    onSubmit() {
        this.submitted = true;
       // carService.addCar(this.model);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}