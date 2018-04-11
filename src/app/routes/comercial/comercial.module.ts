import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TreeModule } from 'angular-tree-component';

import {EmpresasComponent} from './empresas/empresas.component';
import {DisenioComponent} from './disenio/disenio.component';



//import { Dashboardv1Component } from './dashboardv1/dashboardv1.component';
//import { Dashboardv2Component } from './dashboardv2/dashboardv2.component';
//import { Dashboardv3Component } from './dashboardv3/dashboardv3.component';

const routes = [
    //{ path: '', redirectTo: 'dashboard' },
    { path: 'empresas', component: EmpresasComponent }, 
    

];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TreeModule,
  
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