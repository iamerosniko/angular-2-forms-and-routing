"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var cars = [
            { id: 1, brand: 'BMW', model: 'X5', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 250, power: 250 },
            { id: 2, brand: 'BMW', model: 'X1', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 250, power: 150 },
            { id: 3, brand: 'Toyota', model: 'Innova', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 100, power: 150 }
        ];
        return { cars: cars };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
