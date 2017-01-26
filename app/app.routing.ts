import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' }
    //{ path: 'about', component: AboutComponent}
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class Routing {}