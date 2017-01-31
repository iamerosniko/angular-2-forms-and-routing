import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    templateUrl: 'car-form.component.html'
})

export class CarFormComponent implements OnInit{
    submitted = false;
    cars: Car[];
    carsCount = 0;
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

    getAllCar(): void {
        this.carService.getCars().then(cars => this.cars = cars);
    }

    ngOnInit(): void {
        this.getAllCar();
    }

    onSubmit(): void {
        this.model.id = this.cars.length + 1;
        this.submitted = true;
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