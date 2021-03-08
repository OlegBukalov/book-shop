import { Injectable } from '@angular/core';
import { IProduct } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: IProduct[] = [];
  public totalQuantity = 0;
  public totalSum = 0;

  public addToCart(product: IProduct): void {
    const foundProduct = this.findProduct(product);
    if (foundProduct) {
      foundProduct.amount++;
      foundProduct.priceSum = foundProduct.amount * foundProduct.price;
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

  public increaseQuantity(product: IProduct): void {
    const foundProduct = this.findProduct(product);
    if (foundProduct) {
      foundProduct.amount++;
      foundProduct.priceSum = foundProduct.amount * foundProduct.price;
    } else {
      window.alert("Some problem with increase quantity!");
    }
  }

  public decreaseQuantity(product: IProduct): void {
    const foundProduct = this.findProduct(product);
    if (foundProduct) {
      foundProduct.amount--;
      foundProduct.priceSum = foundProduct.amount * foundProduct.price;
      if (foundProduct.amount < 0) {
        foundProduct.amount = 0;
        foundProduct.priceSum = 0;
      }
    } else {
      window.alert("Some problem with decrease quantity!");
    }
  }

  public removeAllBooks(): void {
    this.products = [];
  }

  public updateCartData(): void {
    this.totalQuantity = 0;
    this.totalSum = 0;
    this.products.forEach(item => {
      this.totalQuantity += item.amount;
      this.totalSum += item.priceSum;
    });
  }

  public findProduct(product: IProduct) {
    const findProduct = this.products.find(item => item.id === product.id);
    return findProduct;
  }
}
