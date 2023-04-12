import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss'],
})
export class ListProductosComponent {
  @Input() product!: Producto;
  @Input() index: number = 0;
  @Output() changeSelectedProduct = new EventEmitter<Producto>();

  changeData(product: Producto): void {
    this.changeSelectedProduct.emit(product);
  }
}
