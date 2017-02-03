import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { File } from './file';

@Injectable()
export class DownloadService {
    private headers = new Headers({'Content-Type': 'application/json'});
    //private downloadUrl = 'api/download';  // testing
    private downloadUrl = 'http://localhost:59916/api/ng2_cars';;  // live

    constructor(private http: Http){}

    getFiles(): Promise<File[]> {
        return this.http
                .get(this.downloadUrl, {headers: this.headers})
                .toPromise()
                //.then(response => response.json().data as File[]) //testing
                .then(response => response.json())  // live
                .catch(this.handleError);
                
    }

    getFile(fileName: string): Promise<File> {
        const url = `${this.downloadUrl}/${fileName}`;

        return this.http
                .get(url)
                .toPromise()
                //.then(response => response.json().data as File)  // testing
                .then(response => response.json())  // live
                .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
