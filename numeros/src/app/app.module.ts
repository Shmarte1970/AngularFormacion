import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components

import { AppComponent } from './app.component';
import { ListNumerosComponent } from './components/list-numeros/list-numeros.component';
import { AgregarEditarNumeroComponent } from './components/agregar-editar-numero/agregar-editar-numero.component';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ListNumerosComponent,
    AgregarEditarNumeroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
