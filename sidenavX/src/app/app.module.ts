import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';


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
import { ToastrModule } from 'ngx-toastr';




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
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
    }),
    AppRoutingModule,
    HttpClientModule, 
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(arg0: { timeOut: number; positionClass: string; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

