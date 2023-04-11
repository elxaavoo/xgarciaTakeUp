import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable()
export class DateInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = event.body;
          this.castToDate(body);
        }
         return event;
      })
    );
  }

  castToDate(productos: Producto[]): Producto[] | undefined {
    console.log(productos)
    return productos.map((product) => {
      product.date = new Date(product.date);
      return product;
    }); 
  }
}


