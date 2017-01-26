import { Injectable } from '@angular/core';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {
    getCars(): Promise<Car[]> {
        return Promise.resolve(CARS);
    }

    getCar(id: number): Promise<Car> {
        return this.getCars().then(
            cars => cars.find(
                car => car.id === id
            )
        );
    }
}
