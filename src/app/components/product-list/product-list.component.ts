import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/Interfaces/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'] // Use SCSS for styling
})
export class ProductListComponent {
  products: Product[] = [];
  searchText: string = '';
  errorMessage: string = '';
  displayedProducts: Product[] = [];

  constructor(private http: HttpClient, public cartService: CartService) {
    this.fetchProducts();
  }

  fetchProducts() {
    // placeholder
    this.http.get<Product[]>('../../../assets/products.json').pipe(
      catchError((error: any) => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Something went wrong while fetching products. Please try again later.';
        return throwError(() => new Error('Error occurred while fetching products.'));
      })
    ).subscribe(
      (data: Product[]) => {
        this.products = data;
        this.clearError();
      }
    );
  }

  get filteredProducts() {
    const searchText = this.searchText.toLowerCase().trim();
    if (!searchText) {
      return this.products; // If search text is empty, return all products
    }
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
  }


  clearError() {
    this.errorMessage = '';
  }

  addToCart(product: Product) {
    //will likely add quantity adjustments in UI, leaving this here for future me
    const quantity = 1;
    this.cartService.addToCart({ product, quantity});
  }

  performSearch() {
    const searchText = this.searchText.toLowerCase().trim();
    // Filter products based on the search text entered by the user
    // You can add additional filtering conditions if needed
    this.displayedProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
  }
}
