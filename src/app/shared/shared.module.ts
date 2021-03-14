import { ChangeBackgroundDirective } from './../directives/change-background.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from './../modules/orders.module';

@NgModule({
  declarations: [
    ChangeBackgroundDirective
  ],
  imports: [
    CommonModule,
    OrdersModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    FormsModule,
    ChangeBackgroundDirective
  ]
})
export class SharedModule { }
