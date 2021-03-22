import { BookDetailsComponent } from './../components/book-details/book-details.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BooksListComponent } from 'src/app/components/books-list/books-list.component';
import { BookComponent } from 'src/app/components/book/book.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BooksModule { }
