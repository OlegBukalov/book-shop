import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { RoutingPaths } from './core/enums/routing-paths.enum';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: RoutingPaths.bookPage, component: BooksListComponent },
  { path: RoutingPaths.cartPage, component: CartComponent },
  { path: RoutingPaths.bookDetails, component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
