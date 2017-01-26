import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service'

@Component({
    template: `
        <h3>Car List Component</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of cars" (click)="onSelect(car)">
                    <td>{{car.id}}</td>
                    <td>{{car.brand}}</td>
                    <td>{{car.model}}</td>
                </tr>
            </tbody>
        </table>
    `
})

export class CarsListComponent {
    cars: Car[];

    constructor(
        private router: Router,
        private carService: CarService
    ) {}

    getCars(): void {
        this.carService.getCars().then(cars => this.cars = cars);
    }

    ngOnInit(): void {
        this.getCars();
    }

    onSelect(car: Car) {
        this.router.navigate(['/car', car.id]);
    }
}