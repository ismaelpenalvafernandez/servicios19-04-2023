export class listafactura{
IdFactura: number=0
IdCliente: number=0
TotalFactura: number=0
Iva: number=0

constructor(IdFactura :number, IdCliente :number, TotalFactura :number, Iva: number){
    this.IdFactura=IdFactura;
    this.IdCliente=IdCliente;
    this.TotalFactura=TotalFactura;
    this.Iva=Iva;
}
}