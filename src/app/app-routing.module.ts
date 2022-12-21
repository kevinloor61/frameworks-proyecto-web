import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuloComponent } from './modulo/modulo.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'modulo', component: ModuloComponent},
  {path: '**', redirectTo: 'login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }