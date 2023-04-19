import { Component } from '@angular/core';
import { listafactura } from '../modelo/listafactura';
import { ServiciofacturaService } from '../serviciofactura.service';
@Component({
  selector: 'app-comp-factura',
  templateUrl: './comp-factura.component.html',
  styleUrls: ['./comp-factura.component.css']
})
export class CompFacturaComponent {
  factura=new listafactura(0,0,0,0)
  facturas:listafactura []=[]
  dato:number=0;

  constructor(private serviciofactura: ServiciofacturaService){

    this.facturas=this.serviciofactura.getfactura()
  }
  anadir(){
  this.serviciofactura.addFacturas(this.factura);
  this.factura=new listafactura(0,0,0,0)
}
  modificar(){
   this.serviciofactura.addmodificar(this.dato,this.factura)
   this.factura=new listafactura(0,0,0,0)
}
  borrar(){
   this.serviciofactura.addborrar(this.dato)
}
  buscar(){
   this.serviciofactura.addbuscar(this.dato)
}
}

  
