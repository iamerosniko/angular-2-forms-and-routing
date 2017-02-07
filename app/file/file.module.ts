import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DownloadMemoryService }  from './download-memory.service';
//import { InMemoryDataService }  from '../cars/in-memory-data.service';

import { UploadComponent } from './upload.component';
import { DownloadComponent } from './download.component';


import { DownloadService } from './download.service';

import { FileRouting } from './file.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(DownloadMemoryService),
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        FileRouting
    ],
    declarations: [
        FileSelectDirective ,
        FileDropDirective,
        UploadComponent, 
        DownloadComponent
    ],
    providers: [
        DownloadService
    ]
    //,bootstrap: [ UploadComponent ]
})

export class FileModule {}