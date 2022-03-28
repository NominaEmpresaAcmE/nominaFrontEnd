import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  apiLink: string;
  constructor(private http:HttpClient) {
    this.apiLink = environment.apiUrl;
   }

   createVenta(newVenta: Venta) {
    this.http.post(`${this.apiLink}venta`, newVenta).subscribe(venta => console.log(venta));
   }

   buscarVenta (idVenta: String):Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiLink}venta/${idVenta}`);
  }

  getAllVentas (): Observable<{data: Venta[]}> {
    return this.http.get <{data: Venta[]}>(`${environment.apiUrl}venta`);
  }

  getAllVentasByIdasesor (idAsesor: String): Observable<{data: Venta[]}> {
    return this.http.get <{data: Venta[]}>(`${environment.apiUrl}venta/${idAsesor}`);
  }

  deleteVenta (idVenta: String) {
    this.http.delete(`${this.apiLink}venta/${idVenta}`).subscribe(venta => console.log(venta));
  }

  updateVenta (venta: Venta) {
    this.http.put(`${environment.apiUrl}venta/${venta.idVenta}`, venta).subscribe(venta => console.log(venta));
  }
}
