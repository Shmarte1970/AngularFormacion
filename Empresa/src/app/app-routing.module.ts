import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component

import { AddEditEmpresaComponent } from './components/add-edit-empresa/add-edit-empresa.component';

const routes: Routes = [
    {path: '', component: AddEditEmpresaComponent},
    {path:`**`, redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }