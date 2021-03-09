import { NgModule } from '@angular/core';

import { CartItemComponent } from './../components/cart-item/cart-item.component';
import { CartComponent } from './../components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CartModule { }
