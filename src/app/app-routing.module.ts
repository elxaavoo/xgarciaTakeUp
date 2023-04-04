import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CentralizadoComponent } from './centralizado/centralizado.component';
import { PermissionsGuard } from './permissions.guard';

const routes: Routes = [
  {
    path: 'centralizado',
    loadChildren: () =>
      import('./centralizado/centralizado.module').then(
        (module) => module.CentralizadoModule
      ),
  },
  {
    path: '',
    redirectTo: 'centralizado',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((module) => module.AboutModule),
  },
  {
    path: 'guard',
    loadChildren: () =>
      import('./guard/guard.module').then((module) => module.GuardModule),
    canActivate: [PermissionsGuard]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
