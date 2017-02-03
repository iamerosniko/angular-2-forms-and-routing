import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let files = [
        {filename : "image 12.png"},
        {filename : "image 12.png"},
        {filename : "image 12.png"}
    ];
    return {files};
  }
}