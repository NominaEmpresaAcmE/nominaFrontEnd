import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environment/environment';
import { Asesor } from '../models/asesor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {


  apiLink: string;
  constructor(private http:HttpClient) {
    this.apiLink = environment.apiUrl;
   }

   createAsesor(newAsesor: Asesor) {
    environment.Asesor = newAsesor;
    this.http.post(`${this.apiLink}asesor`, newAsesor).subscribe(asesor => console.log(asesor));
   }

   buscarAsesor (idAsesor: String):Observable<Asesor[]> {
    return this.http.get<Asesor[]>(`${this.apiLink}asesor/${idAsesor}`);
  }

  getAllAsesores (): Observable<{data: Asesor[]}> {
    return this.http.get <{data: Asesor[]}>(`${environment.apiUrl}asesor`);
  }

  deleteAsesor (idAsesor: String) {
    this.http.delete(`${this.apiLink}asesor/${idAsesor}`).subscribe(asesor => console.log(asesor));
  }

  updateAsesor (asesor: Asesor) {
    this.http.put(`${environment.apiUrl}asesor/${asesor.idAsesor}`, Asesor).subscribe(asesor => console.log(asesor));
  }

}
