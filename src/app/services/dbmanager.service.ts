import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DbmanagerService {
  $products: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  private apiUrl = '/assets/data/productos.json';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    this.http.get<Producto[]>(this.apiUrl).subscribe({
      next: (respose) => {
        if (!respose) return;
        this.$products.next(respose);
      },
    });
  }

  updateProducts(products: Producto[]){
    this.$products.next(products);
  }
}
