import { CartService } from './../../services/cart.service';
import { IBook, IProduct } from './../../models/book.model';
import { Component } from '@angular/core';

import { books } from './../../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  public books: IBook[] = books;

  constructor( private cartService: CartService) { }

  public onBuy(book: IBook): void {
    const product: IProduct = {
      id: book.id,
      name: book.name,
      amount: 1
    };
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

}
