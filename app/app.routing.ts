import { NgModule } from '@angular/core';
//import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'about', component: AboutComponent}
];

//export const carsRouting: ModuleWithProviders = RouterModule.forChild(carsRoutes);

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class Routing {}