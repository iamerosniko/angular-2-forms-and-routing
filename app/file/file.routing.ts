import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload.component';

const fileRoutes: Routes = [
    {path: 'file/upload', component: UploadComponent}
];

 @NgModule ({
     imports: [ RouterModule.forChild(fileRoutes) ],
     exports: [ RouterModule ]
 })

export class FileRouting {}