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


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
