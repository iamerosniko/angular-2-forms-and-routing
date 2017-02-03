import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { File } from './file';
import { DownloadService } from './download.service'

@Component({
     moduleId: module.id,
    templateUrl: `download.components.html`
})

export class DownloadComponent implements OnInit{
    files: File[];

    constructor(
        private router: Router,
        private downloadService: DownloadService
    ) {}

    getFiles(): void {
        this.downloadService.getFiles().then(files => this.files = files);
    }

    ngOnInit(): void {
        this.getFiles();
    }

    onSelect(file: File) {
        //this.router.navigate(['/download', file.filename]);
        this.downloadService.getFile(file.filename);
    }
}