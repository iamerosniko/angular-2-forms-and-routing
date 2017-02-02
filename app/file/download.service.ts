import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { File } from './file';

@Injectable()
export class DownloadService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private downloadUrl = 'api/download';  // testing
    //private downloadUrl = 'http://localhost:59916/api/ng2_cars';;  // live

    constructor(private http: Http){}

    postCar(newCar: File): Promise<File> {
        return this.http
            .post(this.downloadUrl, JSON.stringify(newCar), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)  // testing
            //.then(res => res.json())  // live
            .catch(this.handleError);
    }

    getCars(): Promise<File[]> {
        return this.http
                .get(this.downloadUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json().data as File[]) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getCar(id: number): Promise<File> {
        const url = `${this.downloadUrl}/${id}`;

        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json().data as File)  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    putCar(car: File): Promise<File> {
        const url = `${this.downloadUrl}/`;
        //${car.id}
        return this.http
                .put(url, JSON.stringify(car), {headers: this.headers})
                .toPromise()
                .then(() => car)
                .catch(this.handleError);
    }

    deleteCar(id: number): Promise<void> {
        const url = `${this.downloadUrl}/${id}`;

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
