import { Component, EventEmitter, Input, Output } from '@angular/core';
import { clickCali } from '../clickCali';
import { Producto } from '../producto';

@Component({
  selector: 'app-aside-main',
  templateUrl: './aside-main.component.html',
  styleUrls: ['./aside-main.component.scss'],
})
export class AsideMainComponent {
  @Input() productos: Producto[] = [];
  @Input() filtroPrecio: number = 0;
  @Input() busquedaFiltro: string = '';
  @Input() productsFiltrados: Producto[] = [];
  @Input() selectedProduct!: Producto;

  @Output() search = new EventEmitter<string>();
  @Output() filtrarPrecio = new EventEmitter<number>();
  @Output() resetProducts = new EventEmitter<number>();
  @Output() changeSelectedProduct = new EventEmitter<Producto>();

  @Output() knowIsEsmptySubList = new EventEmitter<any>();
  @Output() giveProductById = new EventEmitter<number>();
  @Output() giveEventToOpenDialog = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<Producto>();
  @Output() changeFavProfuct = new EventEmitter<Producto>();
  @Output() calificarProduct = new EventEmitter<number>();
  @Output() calificarProductClick = new EventEmitter<clickCali>();

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

  borrarProducto(selectedProduct: Producto): void {
    this.deleteProduct.emit(selectedProduct);
  }

  isEmptySubList(selectedProduct: Producto, tipo: string) {
    this.knowIsEsmptySubList.emit({ product: selectedProduct, type: tipo });
  }

  getProductById(productID: number) {
    this.giveProductById.emit(productID);
  }

  openDialog(productID: number) {
    this.giveEventToOpenDialog.emit(productID);
  }

  changeFav(producto: Producto) {
    this.changeFavProfuct.emit(producto);
  }

  calificar(calificacion: number) {
    this.calificarProduct.emit(calificacion);
  }

  calificarClick(cali: clickCali) {
    this.calificarProductClick.emit(cali);
  }
}
