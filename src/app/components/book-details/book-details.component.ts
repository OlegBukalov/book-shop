import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from './../../services/books.service';
import { IBook } from './../../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public book!: IBook;
  public books!: IBook[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("bookID"));
    console.log(productIdFromRoute)
    this.bookService.getBooks().subscribe(
      books => {
        //this.books = books;
        books.forEach( book => {
          if (productIdFromRoute === book.id) {
            this.book = book;
          };
        });
      }
    );
    //this.book = this.books.forEach(//.find(book => book.id === productIdFromRoute);
  }

}
