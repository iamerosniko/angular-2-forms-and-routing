import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { File } from './file';
import { DownloadService } from './download.service'

@Component({
    template: `
    <table class="table table-hover">
        <thead>
            <tr>
                <th>filename</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let file of files" (click)="onSelect(file)">
                <td>{{file.filename}}</td>
            </tr>
        </tbody>
    </table>
    `
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
        this.router.navigate(['file/download', file.filename]);
    }
}