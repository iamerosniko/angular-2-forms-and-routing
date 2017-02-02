import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { HttpModule } from '@angular/http';

import { UploadComponent } from './upload.component';
import { DownloadComponent } from './download.component';


import { DownloadService } from './download.service';

import { FileRouting } from './file.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FileRouting
    ],
    declarations: [
        FileSelectDirective , FileDropDirective,
        UploadComponent, DownloadComponent
    ],
    providers: [
        DownloadService
    ]
    //,bootstrap: [ UploadComponent ]
})

export class FileModule {}