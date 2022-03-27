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
}
