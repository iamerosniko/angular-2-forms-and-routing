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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var car_detail_component_1 = require('./car-detail.component');
var car_form_component_1 = require('./car-form.component');
var cars_list_component_1 = require('./cars-list.component');
var car_edit_component_1 = require('./car-edit.component');
var car_service_1 = require('./car.service');
//import { CarService } from './carP.service'
var cars_routing_1 = require('./cars.routing');
var CarModule = (function () {
    function CarModule() {
    }
    CarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                cars_routing_1.CarsRouting
            ],
            declarations: [
                car_detail_component_1.CarDetailComponent,
                car_form_component_1.CarFormComponent,
                cars_list_component_1.CarsListComponent,
                car_edit_component_1.CarEditComponent
            ],
            providers: [
                car_service_1.CarService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CarModule);
    return CarModule;
}());
exports.CarModule = CarModule;
