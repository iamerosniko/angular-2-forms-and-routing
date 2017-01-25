import {Component} from '@angular/core';
import {Car} from './car';

@Component({
    selector: 'car-form',
    templateUrl: 'app/car-form.component.html'
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
    model = new Car(
        1, 
        'BMW', 
        'X5', 
        this.fuelTypes[1], 
        this.bodyStyle[5], 
        350, 
        25
    );

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}