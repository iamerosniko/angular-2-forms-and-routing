import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let file = [
        {filename : "sample 1.txt"},
        {filename : "sample 2.txt"},
        {filename : "sample 3.txt"}    
    ];
    return {file};
  }
}