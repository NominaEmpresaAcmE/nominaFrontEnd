import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../environment/environment';
import { Asesor } from '../models/asesor.model';
import {AsesorService} from '../service/asesor.service'

@Component({
  selector: 'app-ver-asesores',
  templateUrl: './ver-asesores.component.html',
  styleUrls: ['./ver-asesores.component.css']
})
export class VerAsesoresComponent implements OnInit {

  asesores: Array<Asesor>;
  displayedColumns = ['idAsesor','nombre', "edad",'direccion', "cargo","email"];
  dataSource!: MatTableDataSource <any>;
  clickedRows = new Set<Asesor>();

  
  constructor(private AsesorService:AsesorService) { 
    this.asesores= new Array <Asesor> ();
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource (environment.Asesores);
  }

  cargar () {
     this.AsesorService.getAllAsesores().subscribe((asesor)=> {
      environment.Asesores = asesor.data;
      console.log(asesor);});   
      this.dataSource = new MatTableDataSource (environment.Asesores);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
  }

  getAsesor(index: number) {
    environment.Asesor = environment.Asesores[index];
    console.log(environment.Asesores[index]);
  }

  eliminarAsesor() {
    this.AsesorService.deleteAsesor(environment.Asesor.idAsesor);
    this.cargar();
  }
}
