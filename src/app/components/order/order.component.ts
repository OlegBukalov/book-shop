import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
    paymentMethod: "",
    comment: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  onSubmit(): void {
    this.checkoutForm.reset();
    this.cartService.removeAllBooks();
    window.alert('Thank you for your purchase!');
  }

}
