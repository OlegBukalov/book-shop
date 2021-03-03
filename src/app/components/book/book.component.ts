import { Ibook } from './../../models/book.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { books } from './../../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // @Input() book;
  // @Output() notify = new EventEmitter();
  public books: Ibook[] = books;
  constructor() { }

  ngOnInit(): void {
  }

  public onBuy(): void {
    window.alert('The product has been shared!');
  }

}
