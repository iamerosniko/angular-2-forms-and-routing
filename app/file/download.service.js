"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DownloadService = (function () {
    //private downloadUrl = 'http://localhost:59916/api/ng2_cars';;  // live
    function DownloadService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.downloadUrl = '/download'; // testing
    }
    DownloadService.prototype.postFile = function (newFile) {
        return this.http
            .post(this.downloadUrl, JSON.stringify(newFile), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; }) // testing
            .catch(this.handleError);
    };
    DownloadService.prototype.getFiles = function () {
        return this.http
            .get(this.downloadUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; }) //testing
            .catch(this.handleError);
    };
    DownloadService.prototype.getFile = function (fileName) {
        var url = this.downloadUrl + "/" + fileName;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json().data; }) // testing
            .catch(this.handleError);
    };
    DownloadService.prototype.putFile = function (file) {
        var url = this.downloadUrl + "/";
        //${car.id}
        return this.http
            .put(url, JSON.stringify(file), { headers: this.headers })
            .toPromise()
            .then(function () { return file; })
            .catch(this.handleError);
    };
    DownloadService.prototype.deleteFile = function (fileName) {
        var url = this.downloadUrl + "/" + fileName;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DownloadService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DownloadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DownloadService);
    return DownloadService;
}());
exports.DownloadService = DownloadService;
