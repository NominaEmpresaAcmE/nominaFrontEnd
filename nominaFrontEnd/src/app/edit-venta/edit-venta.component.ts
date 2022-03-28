import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Venta } from '../models/venta.model';
import {VentaService} from '../service/venta.service';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {

  newVenta: Venta;
  constructor(private VentaService: VentaService) { 
    this.newVenta = environment.Venta;
  }

  ngOnInit(): void {
  }

  editarVenta() {
    this.VentaService.updateVenta(this.newVenta);
 }
}
