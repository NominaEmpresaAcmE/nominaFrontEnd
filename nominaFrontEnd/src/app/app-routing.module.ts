import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';

const routes: Routes = [
{path: '', redirectTo: '/home',pathMatch: 'full'},
{path: 'home', component: MenuPrincipalComponent},
{path: 'registroAs', component: RegistroAsesorComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
