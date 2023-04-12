import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './permissions.guard';

const routes: Routes = [
  {
    path: 'centralizado',
    loadChildren: () =>
      import('./modules/centralizado/centralizado.module').then(
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
      import('./modules/about/about.module').then(
        (module) => module.AboutModule
      ),
  },
  {
    path: 'guard',
    loadChildren: () =>
      import('./modules/guard/guard.module').then(
        (module) => module.GuardModule
      ),
    canActivate: [PermissionsGuard],
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/shop/shop.module').then((module) => module.ShopModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/productos/productos.module').then(
        (module) => module.ProductosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
