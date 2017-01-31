import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { UploadComponent } from './upload.component';
import { FileRouting } from './file.routing';
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FileRouting
    ],
    declarations: [
       UploadComponent,FileSelectDirective 
    ]
})

export class FileModule {}