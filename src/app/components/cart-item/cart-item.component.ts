import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { IProduct } from './../../models/book.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: IProduct;
  @Output() changeTotal = new EventEmitter();

  constructor( private cartService: CartService ) { }

  public deleteProductFromCart(product: IProduct): void {
    this.cartService.deleteProductFromCart(product);
    this.changeTotal.emit();
  }

  public increaseQuantity(): void {
    this.cartService.increaseQuantity(this.product);
    this.changeTotal.emit();
  }

  public decreaseQuantity(): void {
    this.cartService.decreaseQuantity(this.product);
    this.changeTotal.emit();
  }
}
