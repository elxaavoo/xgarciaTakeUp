import {Review} from "src/app/review"

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
  similares?: number[];
  review?: Review[];
}
