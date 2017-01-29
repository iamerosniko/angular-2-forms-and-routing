import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    templateUrl: 'car-form.component.html'
})

export class CarEditComponent implements OnInit{
    model = new Car(0, '', '');
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
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.carService.getCar(+params['id'])) //the + value will convert id to number type
            .subscribe(car => this.model = car);
    }

    onSubmit(): void {
        this.submitted = true;
        this.carService.putCar(this.model);

        setTimeout(
            () => {
                this.router.navigate(['/cars'])
            }, 
            2000
        );
    }
}