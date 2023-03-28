import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/producto';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';

type keyproduct = "similares" | "review";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'takeup_clone';

  filtro = 0;
  busqueda = '';

  products: Producto[] = [
    {
      id: 1,
      title: 'Camiseta Nike',
      price: 30,
      description: 'Camiseta de Nike Negra, talla L',
      img: 'https://shoppinginibiza.com/143351-large_default/nike-camiseta-negra-ar5254-010-nino.jpg',
      similares: [2, 3],
      review: [
        {
          user: 'Xavier Garcia',
          desc: 'La camiseta negra, es de las mejores camisas que me he comprado en mi vida :)',
        },
        {
          user: 'Jose Juan',
          desc: 'Me gusta más la blanca, pero la negra también esta muy chulaaaa',
        },
      ],
    },
    {
      id: 2,
      title: 'Pantalon Nike',
      price: 20,
      description: 'Pantalon Nike Color Negro, Talla L',
      img: 'https://chemasport.es/23899-thickbox_default/pantalon-nike-sportswear-h-negro.jpg',
      similares: [1, 3],
      review: [
        {
          user: 'Xavier Garcia',
          desc: 'De los mejores pantalones que he tenido',
        },
      ],
    },
    {
      id: 3,
      title: 'Chaqueta Nike',
      price: 90,
      description: 'Chaqueta Nike Color Negro Talla L',
      img: 'https://media.sportisgood.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dr9605-010-vpsrh001.jpg',
      similares: [1, 2],
    },
    {
      id: 4,
      title: 'Gorra New Era',
      price: 40,
      description: 'Gorra New Era Lakers Amarilla/Morada Size 63',
      img: 'https://static.caphunters.es/13560-large_default/gorra-plana-amarilla-ajustada-59fifty-essential-de-los-angeles-lakers-nba-de-new-era.jpg',
    },
    {
      id: 5,
      title: 'Calcetines Jordan',
      price: 15,
      description: 'Calcetines Blancos de Jordan talla 44',
      img: 'https://24segons.es/159253-large_default/calcetines-jordan-everyday-crew-white-3pk.jpg',
      similares: [6],
    },
    {
      id: 6,
      title: 'Jordan 4 Pure Money',
      price: 300,
      description: 'Jordan 4 Pure Money Blancas Talla 44',
      img: 'https://cdn.sneakers123.com/release/960429/jordan-4-retro-pure-money-308497-100.jpg',
      similares: [5],
      review: [
        {
          user: 'Jose Juan',
          desc: 'Las mejores zapatillas que me he comprado en mi vida ;)',
        },
      ],
    },
  ];

  productosFiltrados = this.products;

  product = this.productosFiltrados[0];

  

  constructor(public dialog: MatDialog) {}

  changeData(product: Producto) {
      this.product = product;
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

  filtrarPrecio(precio: number) {
    this.productosFiltrados = this.products.filter((product) => {
      return precio >= product.price; 
    })
  }

  borrarProducto(producto: Producto) {
    let i = this.products.indexOf(producto);
    this.products.splice(i, 1);
    this.productosFiltrados = this.products;
    this.product = this.productosFiltrados[0];
  }
  //TODO : Find tomorrow
  getProductById(id: number): Producto | undefined {
    const hola = this.products.find((product) => {
      return product.id === id
    });
    console.log(hola);
    return hola;
  }

  resetProducts() {
    this.productosFiltrados = this.products;
  }

  isEmptySubList(product: Producto, key: keyproduct) {
    return product[key]?.length;
  }

  search(search: string) {
    this.productosFiltrados = this.products.filter((product) => {
      return product.title.includes(search);
    });
  }
}
