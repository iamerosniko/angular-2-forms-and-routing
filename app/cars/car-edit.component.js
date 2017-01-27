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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var car_service_1 = require('./car.service');
var CarEditComponent = (function () {
    function CarEditComponent(carService, router) {
        this.carService = carService;
        this.router = router;
        this.submitted = false;
        this.fuelTypes = [
            'Petrol',
            'Diesel',
            'Hybrid',
            'Electric'
        ];
        this.bodyStyle = [
            'Convertibles',
            'Coupes',
            'Hatchbacks',
            'Vans',
            'Sedans',
            'Suvs',
            'Trucks',
            'Wagons'
        ];
    }
    CarEditComponent.prototype.ngOnInit = function () {
    };
    CarEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'car-form.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService, router_1.Router])
    ], CarEditComponent);
    return CarEditComponent;
}());
exports.CarEditComponent = CarEditComponent;
