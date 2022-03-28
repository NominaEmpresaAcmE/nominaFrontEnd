import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../environment/environment';
import { Venta } from '../models/venta.model';
import {VentaService} from '../service/venta.service';

@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.css']
})
export class VerVentasComponent implements OnInit {

  ventasId: Array <Venta>;
  displayedColumns = ['idVenta','fechaVenta', "nombre",'valor','cliente', "idAsesor"];
  dataSource!: MatTableDataSource <any>;
  constructor(private VentaService: VentaService) { 
    this.ventasId = new Array <Venta> ();
  }

  
  ngOnInit(): void {
  }


  cargar () {
    this.VentaService.getAllVentasByIdasesor(environment.Asesor.idAsesor).subscribe((venta)=> {
     console.log(venta);
     this.ventasId = venta.data;});   
     
     this.dataSource = new MatTableDataSource (this.ventasId);
 }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();

 }

 getVenta(index: number) {
  environment.Venta = this.ventasId[index];
  console.log(this.ventasId[index]);
}

eliminarVenta() {
  this.VentaService.deleteVenta(environment.Venta.idVenta);
  this.cargar();
}


}
