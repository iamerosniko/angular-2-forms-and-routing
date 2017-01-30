import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service'

@Component({
    moduleId: module.id,
    templateUrl: 'cars-list.component.html'
})

export class CarsListComponent implements OnInit{
    errorMessage: string;
    cars: Car[];
    mode = 'Observable';

    constructor(
        private router: Router,
        private carService: CarService
    ) {}

    // getCars(): void {
    //     this.carService.getCars().then(cars => this.cars = cars);
    // }

    getCars(): void {
        this.carService
            .getCars()
            .subscribe(
                cars => this.cars = cars,
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.getCars();
    }

    onSelect(car: Car) {
        this.router.navigate(['/car', car.id]);
    }
}