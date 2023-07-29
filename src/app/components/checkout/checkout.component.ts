import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'] // Use SCSS for styling
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice();
  }

  onSubmit() {
    // Implement the order submission logic here
    // Retrieve the user's shipping and payment details from the form
    // Submit the order to the backend or display a confirmation message
    console.log('Order placed successfully!');
    // Optionally, you can clear the cart after successful checkout
    // this.cartService.clearCart();
  }
}
