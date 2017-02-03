import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload.component';
import { DownloadComponent } from './download.component';

const fileRoutes: Routes = [
    {path: 'file/upload', component: UploadComponent},
    {path: 'download', component: DownloadComponent},
];

 @NgModule ({
     imports: [ RouterModule.forChild(fileRoutes) ],
     exports: [ RouterModule ]
 })

export class FileRouting {}