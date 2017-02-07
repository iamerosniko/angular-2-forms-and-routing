import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DownloadMemoryService implements InMemoryDbService {
  createDb() {
    let download = [
        { filename : "Image 12.png", filePath : "C://Users//alverer//Documents//GitHub//ng2-api//solution//ng2-api//supload" },
        { filename : "Image 37.png", filePath : "C://Users//alverer//Documents//GitHub//ng2-api//solution//ng2-api//upload" }

    ];
    return {download};

  }
}