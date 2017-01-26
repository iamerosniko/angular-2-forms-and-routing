import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Car } from './car';
//import { CARS } from './mock-cars';

@Injectable()
export class CarService {
    private carsUrl = 'api/cars';  // URL to web api

    constructor(private http: Http){}

    getCars(): Promise<Car[]> {
        return this.http.get(this.carsUrl)
                .toPromise()
                .then(response => response.json().data as Car[])
                .catch(this.handleError);
    }

    getCar(id: number): Promise<Car> {
        const url = `${this.carsUrl}/${id}`;
        return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Car)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
