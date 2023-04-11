import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralizadoComponent } from './centralizado.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header.component';
import { AsideMainComponent } from './aside-main/aside-main.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';
import { CentralizadoRoutingModule } from './centralizado_routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CentralizadoComponent,
    DialogProductoComponent,
    AsideMainComponent,
    AsideComponent,
    MainComponent,
    ListProductosComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    CentralizadoRoutingModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [CentralizadoComponent],
})
export class CentralizadoModule {}
