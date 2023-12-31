import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ProductosComponent } from './productos/productos.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { FacturacionComponent } from './facturacion/facturacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    UsuariosComponent, 
    RolesComponent, 
    EmpresasComponent,
    OfertasComponent,
    ContratosComponent,
    ProductosComponent,
    AlmacenesComponent,
    FacturacionComponent   

  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
