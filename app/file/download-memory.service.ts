import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DownloadMemoryService implements InMemoryDbService {
  createDb() {
    let download = [
        {filename : "image.png"},
        {filename : "image.png"},
        {filename : "image.png"}

    ];
    return {download};

  }
}