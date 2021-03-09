import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BooksListComponent } from 'src/app/components/books-list/books-list.component';
import { BookComponent } from 'src/app/components/book/book.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BooksModule { }
