import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, DialogProductoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, MatDialogModule, MatInputModule, MatButtonModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
