import { RoutingPaths } from './core/enums/routing-paths.enum';
import { CartComponent } from './components/cart/cart.component';
import { BookComponent } from './components/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: RoutingPaths.bookPage, component: BookComponent },
  { path: RoutingPaths.cartPage, component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
