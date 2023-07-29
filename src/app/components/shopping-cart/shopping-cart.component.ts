import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice();
  }

  checkout() {
    // TODO: Checkout Logic; Redirect
    console.log('Proceeding to checkout...');
  }
}
