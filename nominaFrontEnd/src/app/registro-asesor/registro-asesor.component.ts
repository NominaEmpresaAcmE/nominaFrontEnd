import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Asesor } from '../models/asesor.model';
import {AsesorService} from '../service/asesor.service'

@Component({
  selector: 'app-registro-asesor',
  templateUrl: './registro-asesor.component.html',
  styleUrls: ['./registro-asesor.component.css']
})
export class RegistroAsesorComponent implements OnInit {

  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;
  color: ThemePalette = 'primary'
  newAsesor: Asesor;
  
  constructor(private AsesorService: AsesorService) { 
    this.newAsesor = new Asesor;
  }

  
  ngOnInit(): void {

  }

  public crearAsesor() {
    this.AsesorService.createAsesor(this.newAsesor);
 }

}



