import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent}
    //{ path: '', redirectTo: '/cars', pathMatch: 'full' }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRouting {}