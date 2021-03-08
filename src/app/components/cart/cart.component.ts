import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { IProduct } from '../../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products!: IProduct[];
  constructor( private cartService: CartService ) { }
  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }
}
