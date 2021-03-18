import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { IProduct } from '../../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  public products!: IProduct[];
  public totalQuantity = 0;
  public totalSum = 0;
  public sortNameArr = [
    'name',
    'amount',
    'price'
  ];
  public sortName = '';
  public sortFlag = true;

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalSum = this.cartService.getTotalSum();
  }

  public changeTotal(): void {
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalSum = this.cartService.getTotalSum();
  }

  public clearCart(): void {
    this.cartService.removeAllBooks();
    this.products = this.cartService.getProducts();
    this.changeTotal();
  }

  public setSortName(name: string): void {
    this.sortName = name;
  }
}
