import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralizadoComponent } from './centralizado.component';


const routes: Routes = [
  {
    path: '',
    component: CentralizadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentralizadoRoutingModule {}
