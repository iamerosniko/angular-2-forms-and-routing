import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    templateUrl: 'car-detail.component.html'
}) 

export class CarDetailComponent implements OnInit{
    currentCar: Car;

    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.carService.getCar(+params['id'])) //the + value will convert id to number type
            .subscribe(car => this.currentCar = car);
    }

    onDeleteCar(id: number): void{
        this.carService.deleteCar(id);
        this.router.navigate(['/cars'])
    }
}