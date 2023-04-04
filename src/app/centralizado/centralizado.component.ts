import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { clickCali } from '../clickCali';
import { DialogProductoComponent } from '../dialog-producto/dialog-producto.component';
import { Producto } from '../interfaces/producto.interface';

type keyproduct = 'similares' | 'review';

@Component({
  selector: 'app-centralizado',
  templateUrl: './centralizado.component.html',
  styleUrls: ['./centralizado.component.scss'],
})
export class CentralizadoComponent {
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

  title = 'takeup_clone';
  filtro = 0;
  busqueda = '';

  products: Producto[] = [
    {
      id: 1,
      title: 'Camiseta Nike',
      price: 30,
      description: 'Camiseta de Nike Negra, talla L',
      calificacion: 4,
      img: 'https://static.wixstatic.com/media/9622a0_6f4116c9885f403f83e59c1279720afa~mv2.png/v1/fill/w_550,h_550,al_c,q_85,enc_auto/9622a0_6f4116c9885f403f83e59c1279720afa~mv2.png',
      fav: false,
      similares: [2, 3],
      review: [
        {
          user: 'Xavier Garcia',
          desc: 'La camiseta negra, es de las mejores camisas que me he comprado en mi vida :)',
          calificacion: 5,
        },
        {
          user: 'Jose Juan',
          desc: 'Me gusta más la blanca, pero la negra también esta muy chulaaaa',
          calificacion: 3,
        },
      ],
    },
    {
      id: 2,
      title: 'Pantalon Nike',
      price: 20,
      description: 'Pantalon Nike Color Negro, Talla L',
      calificacion: 3,
      img: 'https://www.geomix.at/shop/images/0-0-115544.png',
      fav: false,
      similares: [1, 3],
      review: [
        {
          user: 'Xavier Garcia',
          desc: 'Unos pantalones normales y corrientes de nike',
          calificacion: 3,
        },
      ],
    },
    {
      id: 3,
      title: 'Chaqueta Nike',
      price: 90,
      description: 'Chaqueta Nike Color Negro Talla L',
      calificacion: 2,
      img: 'https://calzetonia.com/wp-content/uploads/2022/11/CF3A5F5B-9D49-4754-B01F-163D6AAE920F.png',
      fav: false,
      similares: [1, 2],
    },
    {
      id: 4,
      title: 'Gorra New Era',
      price: 40,
      description: 'Gorra New Era Lakers Amarilla/Morada Size 63',
      calificacion: 1,
      img: 'https://inussualbasket.com/wp-content/uploads/2022/06/ck1830-728-parte-frontal.png',
      fav: false,
    },
    {
      id: 5,
      title: 'Calcetines Jordan',
      price: 15,
      description: 'Calcetines Blancos de Jordan talla 44',
      calificacion: 0,
      img: 'https://static.nike.com/a/images/t_default/rlf3uwbuwsedmkujawox/jordan-flight-calcetines-largos-de-baloncesto-w8ToGqRK.png',
      fav: false,
      similares: [6],
    },
    {
      id: 6,
      title: 'Jordan 4 Pure Money',
      price: 300,
      description: 'Jordan 4 Pure Money Blancas Talla 44',
      calificacion: 5,
      img: 'https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/308497-100/2.png',
      fav: false,
      similares: [5],
      review: [
        {
          user: 'Jose Juan',
          desc: 'Las mejores zapatillas que me he comprado en mi vida ;)',
          calificacion: 5,
        },
      ],
    },
  ];

  productosFiltrados = this.products;

  product = this.productosFiltrados[0];

  constructor(public dialog: MatDialog) {}

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
  }

  calificar(calificacion: number) {
    for (let indiceEstrella = 0; indiceEstrella < 5; indiceEstrella++) {
      let src = document.getElementById(indiceEstrella + 1 + 'star');
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
