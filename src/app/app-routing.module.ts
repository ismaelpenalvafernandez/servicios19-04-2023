import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompFacturaComponent } from './comp-factura/comp-factura.component';
import { ContactarComponent } from './contactar/contactar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FacturasComponent } from './facturas/facturas.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: "ListaFacturas", component:CompFacturaComponent},
  { path: "Inicio", component:InicioComponent},
  { path: "Contactar", component:ContactarComponent},
  { path: "Facturas", component:FacturasComponent},
  { path: "QuienesSomos", component:QuienesSomosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
