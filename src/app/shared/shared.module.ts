import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from './../modules/orders.module';
import { ChangeFontDirective } from './directives/change-font.directive';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    ChangeBackgroundDirective,
    ChangeFontDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    OrdersModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    FormsModule,
    ChangeBackgroundDirective,
    ChangeFontDirective,
    OrderByPipe,
    RouterModule
  ]
})
export class SharedModule { }
