import { IBook } from './../models/book.model';
import { Injectable } from '@angular/core';
import { books } from '../shared/mock-data/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: IBook[] = [];
  constructor() { }

  public getBooks(): IBook[] {
    this.books = books;
    return this.books;
  }
}
