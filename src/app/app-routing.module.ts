import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchingComponent } from './components/searching/searching.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AdminConsoleComponent } from './components/admin/admin-console/admin-console.component';
import { AdminAddingCategoryComponent } from './components/admin/admin-adding-category/admin-adding-category.component';
import { AdminAddingProductCategoryComponent } from './components/admin/admin-adding-product-category/admin-adding-product-category.component';
import { AdminAddingProductComponent } from './components/admin/admin-adding-product/admin-adding-product.component';
import { WoodenToysComponent } from './components/wooden-toys/wooden-toys.component';
import { WoodenToysProductComponent } from './components/wooden-toys/wooden-toys-product/wooden-toys-product.component';
import { PlasticToysComponent } from './components/plastic-toys/plastic-toys.component';
import { PlasticToysProductComponent } from './components/plastic-toys/plastic-toys-product/plastic-toys-product.component';
import { HatchimalsComponent } from './components/hatchimals/hatchimals.component';
import { HatchimalsProductComponent } from './components/hatchimals/hatchimals-product/hatchimals-product.component';
import { ShopkinsComponent } from './components/shopkins/shopkins.component';
import { ShopkinsProductComponent } from './components/shopkins/shopkins-product/shopkins-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'wooden-toys',
    component: WoodenToysComponent,
    children: [{ path: ":id",  component: WoodenToysProductComponent}]
  },
  { 
    path: 'plastic-toys',
    component: PlasticToysComponent,
    children: [{ path: ":id",  component: PlasticToysProductComponent}]
  },
  { 
    path: 'hatchimals',
    component: HatchimalsComponent,
    children: [{ path: ":id",  component: HatchimalsProductComponent}]
  },
  { 
    path: 'shopkins',
    component: ShopkinsComponent,
    children: [{ path: ":id",  component: ShopkinsProductComponent}]
  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'searching', component: SearchingComponent },
  { path: 'login', component: AuthenticationComponent },
  { 
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: ":id",  component: AdminConsoleComponent},
      { path: ":id/add-category",  component: AdminAddingCategoryComponent},
      { path: ":id/add-product-category",  component: AdminAddingProductCategoryComponent},
      { path: ":id/add-product",  component: AdminAddingProductComponent}
    ]
  },
  { path: 'account-register', component: AccountRegisterComponent },
  { path: "**", redirectTo:"home" }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
