import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../environment/environment';
import { Venta } from '../models/venta.model';
import {VentaService} from '../service/venta.service';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.css']
})
export class RegistroVentaComponent implements OnInit {

  newVenta: Venta;
  
  constructor(private VentaService: VentaService) {
    this.newVenta = new Venta ();
   }

  ngOnInit(): void {
  }


  public crearVenta() {
    this.newVenta.idAsesor = environment.Asesor.idAsesor
    this.VentaService.createVenta(this.newVenta);
  }
}
