import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { UploadComponent } from './upload.component';
import { FileRouting } from './file.routing';

@NgModule({
    imports: [
        BrowserModule,
        FileRouting
    ],
    declarations: [FileSelectDirective , FileDropDirective,
       UploadComponent
    ],
    bootstrap: [ UploadComponent ]
})

export class FileModule {}