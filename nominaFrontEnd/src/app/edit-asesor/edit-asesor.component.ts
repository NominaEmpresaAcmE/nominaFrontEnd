import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { environment } from '../environment/environment';
import { Asesor } from '../models/asesor.model';
import {AsesorService} from '../service/asesor.service'

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit {

  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;
  color: ThemePalette = 'primary'
  newAsesor = environment.Asesor;
  constructor(private AsesorService: AsesorService) { 

  }

  ngOnInit(): void {
  }

   editarAsesor() {
    this.AsesorService.updateAsesor(this.newAsesor);
 }
}
