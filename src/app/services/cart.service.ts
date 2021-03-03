import { IProduct } from '../models/book.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: IProduct[] = [];

  public addToCart(product: IProduct): void {
    this.products.push(product);
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

}
