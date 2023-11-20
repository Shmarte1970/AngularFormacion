import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ProductosComponent } from './productos/productos.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';






@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    UsuariosComponent, 
    RolesComponent, 
    OfertasComponent,
    ContratosComponent,
    ProductosComponent,
    AlmacenesComponent,
    FacturacionComponent,
    SublevelMenuComponent,
  
   


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
