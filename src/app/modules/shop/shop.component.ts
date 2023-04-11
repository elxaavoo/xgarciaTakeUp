import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { DbmanagerService } from 'src/app/services/dbmanager.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(private dbmanager: DbmanagerService) {}

  firstIndexShopProduct: number = 0;

  ngOnInit(): void {
    this.dbmanager.$products.subscribe({
      next: (response) => {
        this.products = response;
        this.getShopProducts()
      },
    });
  }

  products: Producto[] = [];
  shopProducts: Producto[] = [];

  getShopProducts(){
    this.shopProducts = this.products.filter((producto) => {
      return producto.fav === true;
    });
  }
}
