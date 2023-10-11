import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddEditEmpresaComponent } from './components/add-edit-empresa/add-edit-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpresaComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
