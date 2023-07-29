import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/Interfaces/product';

interface CartItem {
  product: Product;
  quantity: number;
}


@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.scss']
})
export class ShoppingCartViewComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
  }

  updateCartItem(item: CartItem) {
    // Check if the quantity is valid (greater than 0)
    if (item.quantity > 0) {
      this.cartService.updateCartItem(item);
    } else {
      // If the quantity is 0 or less, remove the item from the cart
      this.cartService.removeFromCart(item.product);
    }
  }

  clearCart() {
    // todo: clear cart logic
  }
}
