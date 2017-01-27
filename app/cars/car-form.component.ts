import { Component } from '@angular/core';
import { Router } from '@angular/router'

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
        private carService: CarService,
        private router: Router
    ){}

    onSubmit() {
        this.submitted = true;
        this.model.id = 5;
        this.carService.postCar(this.model);

        setTimeout(
            () => {
                this.router.navigate(['/cars'])
            }, 
            2000
        );
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}