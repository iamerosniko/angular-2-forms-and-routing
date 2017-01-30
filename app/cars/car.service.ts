import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Car } from './car';

@Injectable()
export class CarService {
    private headers = new Headers({'Content-Type': 'application/json'});
    //private carsUrl = 'api/cars.json';;  // URL to web api
    private carsUrl = 'http://localhost:59916/api/ng2_cars';;  // URL to web api

    constructor(private http: Http){}

    postCar(newCar: Car): Promise<Car> {
        return this.http
            .post(this.carsUrl, JSON.stringify(newCar), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // getCars(): Promise<Car[]> {
    //     return this.http
    //             .get(this.carsUrl, {headers: this.headers})
    //             .toPromise()
    //             .then(response => response.json().data as Car[])
    //             .catch(this.handleError);
    // }

    getCars (): Observable<Car[]> {
        return this.http
                .get(this.carsUrl)
                .map(res => <Car[]>res.json())
                .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        //body = Array.of(body);
        //return body.data;
        return body.data || { };
    }


    getCar(id: number): Promise<Car> {
        const url = `${this.carsUrl}/${id}`;

        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json().data as Car)
                .catch(this.handleError);
    }

    putCar(car: Car): Promise<Car> {
        const url = `${this.carsUrl}/${car.id}`;

        return this.http
                .put(url, JSON.stringify(car), {headers: this.headers})
                .toPromise()
                .then(() => car)
                .catch(this.handleError);
    }

    deleteCar(id: number): Promise<void> {
        const url = `${this.carsUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
