import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from './../modules/orders.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    FormsModule
  ]
})
export class SharedModule { }
