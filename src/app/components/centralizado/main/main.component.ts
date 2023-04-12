import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { clickCali } from '../../../interfaces/clickCali';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() productos: Producto[] = [];
  @Input() productsFiltrados: Producto[] = [];
  @Input() selectedProduct!: Producto;
  @Output() knowIsEsmptySubList = new EventEmitter<any>();
  @Output() giveProductById = new EventEmitter<number>();
  @Output() giveEventToOpenDialog = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<Producto>();
  @Output() changeFavProfuct = new EventEmitter<Producto>();
  @Output() calificarProduct = new EventEmitter<number>();
  @Output() calificarProductClick = new EventEmitter<clickCali>();

  getProductById(id: number): Producto | undefined {
    return this.productos.find((product) => {
      return product.id === id;
    });
  }

  borrarProducto(selectedProduct: Producto): void {
    this.deleteProduct.emit(selectedProduct);
  }

  isEmptySubList(selectedProduct: Producto, tipo: string) {
    this.knowIsEsmptySubList.emit({ product: selectedProduct, type: tipo });
  }

  //getProductById(productID: number) {
  //   this.giveProductById.emit(productID);
  // }

  openDialog(productID: number) {
    this.giveEventToOpenDialog.emit(productID);
  }

  changeFav(producto: Producto) {
    this.changeFavProfuct.emit(producto);
  }

  calificar(calificacion: number) {
    this.calificarProduct.emit(calificacion);
  }

  calificarClick(cali: number, producto: Producto) {
    let caliCLick = { calificacion: cali, producto: producto };
    this.calificarProductClick.emit(caliCLick);
  }

  ngOnInit(): void {
    this.calificar(this.selectedProduct?.calificacion);
  }
}
