import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartViewComponent } from './components/shopping-cart-view/shopping-cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


interface AppRoute {
  path: string;
  component: any;
  data?: any;
}
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartViewComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
