import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { File } from './file';

@Injectable()
export class DownloadService {
    private headers = new Headers({'Content-Type': 'application/json'});
    //private downloadUrl = 'api/download';  // testing
    private downloadUrl = 'http://localhost:59916/api/download';;  // live

    constructor(private http: Http){}

    getFiles(): Promise<File[]> {
        return this.http
                .get(this.downloadUrl, {headers: this.headers})
                .toPromise()
                //.then(response => response.json().data as File[]) //testing
                .then(response => response.json())  // live
                .catch(this.handleError);

    }
    
    getFile(fName: string){
        const url = `${this.downloadUrl}/?filename=${fName}`;
        var win = window.open(url);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
