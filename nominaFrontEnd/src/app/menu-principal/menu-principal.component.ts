import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import {AsesorService} from '../service/asesor.service'

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private AsesorService:AsesorService) { }

  ngOnInit(): void {
  }

  cargar () {
    this.AsesorService.getAllAsesores().subscribe((asesor)=> {
    environment.Asesores = asesor.data;
    console.log(asesor);});
     
 }
}
