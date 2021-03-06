import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';



import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';

import {HttpClientModule } from '@angular/common/http';
import { VerAsesoresComponent } from './ver-asesores/ver-asesores.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { VerVentasComponent } from './ver-ventas/ver-ventas.component';
import { RegistroVentaComponent } from './registro-venta/registro-venta.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    RegistroAsesorComponent,
    VerAsesoresComponent,
    EditAsesorComponent,
    VerVentasComponent,
    RegistroVentaComponent,
    EditVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
