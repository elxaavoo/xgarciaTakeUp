import { Review } from 'src/app/interfaces/review.interface';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
  fav?: boolean;
  calificacion: number;
  similares?: number[];
  review?: Review[];
}
