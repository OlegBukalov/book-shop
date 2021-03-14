import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from './../modules/orders.module';
import { ChangeFontDirective } from './directives/change-font.directive';

@NgModule({
  declarations: [
    ChangeBackgroundDirective,
    ChangeFontDirective,
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
    ChangeBackgroundDirective,
    ChangeFontDirective
  ]
})
export class SharedModule { }
