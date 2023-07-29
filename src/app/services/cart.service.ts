import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: any[] = [];

  constructor() {}

  /**
   * @description - gets cart items(?)
   * @returns - CartItem objects
   */
  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  updateCartItem(item: CartItem) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.product.id === item.product.id);
    if (index !== -1) {
      this.cartItems[index].quantity = item.quantity;
    }
  }

  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id);
  }

  calculateTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }

  getCartItemCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
