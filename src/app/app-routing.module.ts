import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './components/tabla1/tabla1.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { Tabla3Component } from './components/tabla3/tabla3.component';

const routes: Routes = [
  { path: 'tabla1', component: Tabla1Component },
  { path: 'tabla2', component: Tabla2Component },
  { path: 'tabla3', component: Tabla3Component },
  { path: '', redirectTo: '/tabla1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
