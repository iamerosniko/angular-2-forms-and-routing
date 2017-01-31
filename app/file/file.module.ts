import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadComponent } from './upload.component';
import { FileRouting } from './file.routing';
@NgModule({
    imports: [
        CommonModule,
        FileRouting
    ],
    declarations: [
       UploadComponent 
    ]
})

export class FileModule {}