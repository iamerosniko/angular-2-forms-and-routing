import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    templateUrl: 'car-form.component.html'
})

export class CarEditComponent implements OnInit{
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

    constructor(
        private carService: CarService,
        private router: Router
    ){}

    ngOnInit(): void {
        
    }
}