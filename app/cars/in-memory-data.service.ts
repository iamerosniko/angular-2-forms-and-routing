import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cars = [
        {id: 1, brand: 'BMW', model: 'X5', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 250, power: 250},
        {id: 2, brand: 'BMW', model: 'X1', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 250, power: 150},
        {id: 3, brand: 'Toyota', model: 'Innova', fuelType: 'Diesel', bodyStyle: 'Suvs', topSpeed: 100, power: 150}
    ];
    return {cars};

  }
}