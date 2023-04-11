import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { clickCali } from '../../interfaces/clickCali';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { Producto } from '../../interfaces/producto.interface';
import { DbmanagerService } from '../../services/dbmanager.service';

type keyproduct = 'similares' | 'review';

@Component({
  selector: 'app-centralizado',
  templateUrl: './centralizado.component.html',
  styleUrls: ['./centralizado.component.scss'],
})
export class CentralizadoComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Output() filtrarPrecio = new EventEmitter<number>();
  @Output() resetProducts = new EventEmitter<number>();
  @Output() changeSelectedProduct = new EventEmitter<Producto>();

  @Output() knowIsEsmptySubList = new EventEmitter<any>();
  @Output() giveProductById = new EventEmitter<number>();
  @Output() giveEventToOpenDialog = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<Producto>();
  @Output() changeFavProfuct = new EventEmitter();
  @Output() calificarProduct = new EventEmitter<number>();
  @Output() calificarProductClick = new EventEmitter<clickCali>();

  constructor(private dbmanager: DbmanagerService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.dbmanager.$products.subscribe(
      {
        next: (response) => {
          this.products = response;
          this.productosFiltrados = this.products;
          this.product = this.productosFiltrados[0];
        } 
      }
    )
  }

  title = 'takeup_clone';
  filtro = 0;
  busqueda = '';

  products: Producto[] = [];

  productosFiltrados = this.products;

  product = this.productosFiltrados[0];

  changeData(product: Producto) {
    this.product = product;
    this.calificar(product.calificacion);
  }

  openDialog(id: number) {
    let p = this.getProductById(id);
    const dialog1 = this.dialog.open(DialogProductoComponent, {
      data: {
        id: p?.id,
        title: p?.title,
        price: p?.price,
        description: p?.description,
        img: p?.img,
      },
    });
  }

  filtrarPrecioMax(precio: number) {
    this.productosFiltrados = this.products.filter((product) => {
      return precio >= product.price;
    });
  }

  borrarProducto(producto: Producto) {
    let i = this.products.indexOf(producto);
    this.products.splice(i, 1);
    this.productosFiltrados = this.products;
    this.product = this.productosFiltrados[0];
    this.calificar(this.product.calificacion);
  }

  getProductById(id: number): Producto | undefined {
    return this.products.find((product) => {
      return product.id === id;
    });
  }

  resetAllProductsFilter(num: number) {
    this.productosFiltrados = this.products;
    this.filtro = 0;
    this.busqueda = '';
  }

  isEmptySubList(product: Producto, key: keyproduct) {
    return product[key]?.length;
  }

  searchProducts(search: string) {
    this.productosFiltrados = this.products.filter((product) => {
      return product.title.includes(search);
    });
  }

  changeFav(product: Producto) {
    let indice = this.products.indexOf(product);
    if (this.products[indice].fav) this.products[indice].fav = false;
    else this.products[indice].fav = true;
    this.dbmanager.updateProducts(this.products);
  }

  calificar(calificacion: number) {
    for (let indiceEstrella = 0; indiceEstrella < 5; indiceEstrella++) {
      let src = document.getElementById(indiceEstrella + 1 + 'star');
      if (!src) return;
      if (indiceEstrella < calificacion) {
        let cal = this.calificando(calificacion);
        src!.style.color = cal;
      } else {
        src!.style.color = 'lightgrey';
      }
    }
  }

  calificando(calificacion: number): string {
    if (calificacion < 3) {
      return 'red';
    } else if (calificacion >= 4) {
      return 'yellow';
    } else if (calificacion >= 3) {
      return 'orange';
    } else return 'lightgrey';
  }

  calificarClick(cali: clickCali) {
    this.calificar(cali.calificacion);
    let indice = this.products.indexOf(cali.producto);
    this.products[indice].calificacion = cali.calificacion;
  }
}
