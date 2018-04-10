import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {EmpresasComponent} from './empresas/empresas.component';


//import { Dashboardv1Component } from './dashboardv1/dashboardv1.component';
//import { Dashboardv2Component } from './dashboardv2/dashboardv2.component';
//import { Dashboardv3Component } from './dashboardv3/dashboardv3.component';

const routes: Routes = [

    { path: 'empresas', component: 'EmpresasComponent'},
    { path: 'empresas', redirectTo: 'empresas'},

    //{ path: '', redirectTo: 'dashboard' },
  //  { path: '', redirectTo: 'v1' },
  //  { path: 'v1', component: Dashboardv1Component },
  //  { path: 'v2', component: Dashboardv2Component },
  //  { path: 'v3', component: Dashboardv3Component },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
  
    ],
    declarations: [
        EmpresasComponent,
      //  Dashboardv1Component,
      //  Dashboardv2Component,
      //  Dashboardv3Component
    ],
    exports: [
        RouterModule
    ]
})
export class ComercialModule { }