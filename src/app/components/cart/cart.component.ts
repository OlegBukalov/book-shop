import { IProduct } from './../../models/book.model';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public products: IProduct[] = this.cartService.getProducts();

  constructor( private cartService: CartService ) { }

}
