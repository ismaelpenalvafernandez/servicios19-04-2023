import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { FacturasComponent } from './facturas/facturas.component';
import { CompFacturaComponent } from './comp-factura/comp-factura.component';
import { FormsModule } from '@angular/forms';
import { ServiciofacturaService } from './serviciofactura.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactarComponent,
    FacturasComponent,
    CompFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiciofacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
