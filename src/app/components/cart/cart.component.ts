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
  public totalQuantity = 0;
  public totalSum = 0;
  constructor( private cartService: CartService ) { }
  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }
}
