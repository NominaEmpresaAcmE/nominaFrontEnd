import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-registro-asesor',
  templateUrl: './registro-asesor.component.html',
  styleUrls: ['./registro-asesor.component.css']
})
export class RegistroAsesorComponent implements OnInit {

  
  title: string;

  roles: string[] = ['Estudiante', 'Tutor', 'Jurado'];
  hide = true;
  color: ThemePalette = 'primary'
  constructor() { 
    this.title = 'Registro Poli Degree';
  }

  
  ngOnInit(): void {

  }

}
