import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BooksService } from './../../services/books.service';
import { IBook } from './../../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  public books!: Observable<IBook[]>;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
