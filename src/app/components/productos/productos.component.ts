import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto.interface';
import { DbmanagerService } from 'src/app/services/dbmanager.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(
    private dbmanager: DbmanagerService,
    private formBuilder: FormBuilder
  ) {}

  descriptionPatters: any = /^[A-Za-z#&]+$/;

  products: Producto[] = [];
  newProducto!: Producto;

  ngOnInit(): void {
    this.dbmanager.$products.subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  productForm: FormGroup = this.formBuilder.group({
    id: [this.products.length + 1],
    title: [null, Validators.required, Validators.minLength(4)],
    price: [null, Validators.required, Validators.min(1), Validators.max(999)],
    description: [
      null,
      Validators.required,
      Validators.maxLength(350),
      Validators.pattern(this.descriptionPatters),
    ],
    img: [null, Validators.required],
    fav: [false],
    calificacion: [0],
    similares: [[]],
    date: [new Date()],
    review: [[]],
  });

  firstIndexShopProduct: number = 0;

  formProduct: any;

  addProduct() {
    this.formProduct = this.productForm.value;
    this.newProducto = this.formProduct;
    this.products.push(this.newProducto);
  }

  validar(field: string): boolean {
    return (
      this.productForm.controls[field].invalid &&
      this.productForm.controls[field].touched
    );
  }
}
