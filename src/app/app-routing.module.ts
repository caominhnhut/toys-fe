import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ClothingProductComponent } from './components/clothing/clothing-product/clothing-product.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ShoesProductComponent } from './components/shoes/shoes-product/shoes-product.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'clothing',
    component: ClothingComponent,
    children: [{ path: ":id",  component: ClothingProductComponent}]
  },
  { 
    path: 'shoes',
    component: ShoesComponent,
    children: [{ path: ":id",  component: ShoesProductComponent}]
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
