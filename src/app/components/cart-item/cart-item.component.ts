import { CartService } from './../../services/cart.service';
import { IProduct } from './../../models/book.model';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {
  @Input() product: IProduct;

  public products: IProduct[] = this.cartService.getProducts();

  constructor( private cartService: CartService ) {
    this.product = {
      id: 0,
      name: '',
      amount: 0
    }
  }

  public deleteProductFromCart(product: IProduct): void {
    this.cartService.deleteProductFromCart(product);
  }

}
