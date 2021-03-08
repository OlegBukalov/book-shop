import { Injectable } from '@angular/core';
import { IProduct } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: IProduct[] = [];

  public addToCart(product: IProduct): void {
    let findProduct = this.products.find(item => item.id === product.id);
    if (findProduct) {
      findProduct.amount++;
    } else {
      this.products.push(product);
    }
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

  public deleteProductFromCart(product: IProduct): void {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
