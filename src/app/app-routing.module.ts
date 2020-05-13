import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: 'shoppingCart', component: ProductsComponent }];
// The above tells the router to match that URL to path: 'shoppingCart' and display the ProductsComponent when the URL is something like localhost:4200/shoppingCart
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
