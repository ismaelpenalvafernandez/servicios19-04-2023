import { Injectable } from '@angular/core';
import { listafactura } from './modelo/listafactura';

@Injectable({
  providedIn: 'root'
})
export class ServiciofacturaService {

  mifactura:listafactura[]=[]
  constructor(){}
  addFacturas(factura: listafactura) {
   this.mifactura.push(factura);
  }
  getfactura():listafactura[]{
    return this.mifactura
  }
  addborrar(id:number){
    let dato=this.mifactura.findIndex((mifactura)=>mifactura.IdFactura===id)
    if(dato!=-1){
    this.mifactura.splice(dato,1)
    }
  }
  addbuscar(id:number){
    let dato=this.mifactura.findIndex((mifactura)=>mifactura.IdFactura===id)
    if(dato!=-1){
      alert("Este es el ID de la factura " + this.mifactura[dato].IdFactura + "Esto es el IVA "+ this.mifactura[dato].Iva)
    }
  }
  addmodificar(id:number, nuevafactura:listafactura){
    let dato=this.mifactura.findIndex((mifactura)=>mifactura.IdFactura===id)
    if(dato!=-1){
      this.mifactura[dato]= nuevafactura
  }
}
}



