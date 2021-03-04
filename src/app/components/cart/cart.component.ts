import { Component } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { IProduct } from './../../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {

  public products: IProduct[] = this.cartService.getProducts();

  constructor( private cartService: CartService ) { }

}
