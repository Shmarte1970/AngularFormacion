import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ProductosComponent } from './productos/productos.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { FacturacionComponent } from './facturacion/facturacion.component';

const routes: Routes = [

    {path: '', redirectTo: 'dashboard', pathMatch:'full'},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'empresas', component: EmpresasComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'contratos', component: ContratosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'almacenes', component: AlmacenesComponent},
    {path: 'facturacion', component: FacturacionComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
