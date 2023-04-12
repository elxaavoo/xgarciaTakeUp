import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() productos: Producto[] = [];
  @Input() filtroPrecio: number = 0;
  @Input() busquedaFiltro: string = '';
  @Input() productsFiltrados: Producto[] = [];
  @Input() selectedProduct!: Producto;
  @Output() search = new EventEmitter<string>();
  @Output() filtrarPrecio = new EventEmitter<number>();
  @Output() resetProducts = new EventEmitter<number>();
  @Output() changeSelectedProduct = new EventEmitter<Producto>();

  pasarSearch(busqueda: string): void {
    this.search.emit(busqueda);
  }

  pasarFiltroPrecio(precioMax: number): void {
    this.filtrarPrecio.emit(precioMax);
  }

  giveEventResetProductos(num: number): void {
    this.resetProducts.emit(num);
  }

  changeData(product: Producto): void {
    this.changeSelectedProduct.emit(product);
  }
}
