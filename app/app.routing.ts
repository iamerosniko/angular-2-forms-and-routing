import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo: 'download', pathMatch: 'full' }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}