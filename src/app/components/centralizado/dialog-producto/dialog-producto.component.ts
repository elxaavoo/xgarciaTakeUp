import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.scss'],
})
export class DialogProductoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto
  ) {}

  ngOnInit() {}

  closeModal() {
    this.dialogRef.close();
  }
}
