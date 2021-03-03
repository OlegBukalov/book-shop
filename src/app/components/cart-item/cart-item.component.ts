import { CartService } from './../../services/cart.service';
import { IProduct } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {

  public products: IProduct[] = this.cartService.getProducts();

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
  }

}
