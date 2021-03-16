import { IBook } from './../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('assets/books.json');
  }
}
