import { Component, Input } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { IProduct } from './../../models/book.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: IProduct;
  public totalQuantity = 0;
  public totalSum = 0;
  public products: IProduct[] = this.cartService.getProducts();
  constructor( private cartService: CartService ) { }

  public deleteProductFromCart(product: IProduct): void {
    this.cartService.deleteProductFromCart(product);
  }

  public increaseQuantity(): void {
    this.cartService.increaseQuantity(this.product);
  }

  public decreaseQuantity(): void {
    this.cartService.decreaseQuantity(this.product);
  }
}
