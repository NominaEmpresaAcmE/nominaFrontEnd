import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';
import { VerAsesoresComponent } from './ver-asesores/ver-asesores.component';

const routes: Routes = [
{path: '', redirectTo: '/home',pathMatch: 'full'},
{path: 'home', component: MenuPrincipalComponent},
{path: 'registroAs', component: RegistroAsesorComponent},
{path: 'verAsesores', component: VerAsesoresComponent},
{path: 'editarAsesores', component: EditAsesorComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
