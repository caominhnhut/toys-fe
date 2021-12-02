import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { ClothingProductComponent } from './components/clothing/clothing-product/clothing-product.component';
import { ClothingSidebarComponent } from './components/clothing/clothing-sidebar/clothing-sidebar.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ShoesSidebarComponent } from './components/shoes/shoes-sidebar/shoes-sidebar.component';
import { ShoesProductComponent } from './components/shoes/shoes-product/shoes-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchingComponent } from './components/searching/searching.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminConsoleComponent } from './components/admin/admin-console/admin-console.component';
import { AdminAddingCategoryComponent } from './components/admin/admin-adding-category/admin-adding-category.component';
import { AdminAddingProductCategoryComponent } from './components/admin/admin-adding-product-category/admin-adding-product-category.component';
import { AdminAddingProductComponent } from './components/admin/admin-adding-product/admin-adding-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothingComponent,
    ClothingProductComponent,
    ClothingSidebarComponent,
    ShoesComponent,
    ShoesSidebarComponent,
    ShoesProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    SearchingComponent,
    AuthenticationComponent,
    AdminComponent,
    AccountRegisterComponent,
    AdminSidebarComponent,
    AdminConsoleComponent,
    AdminAddingCategoryComponent,
    AdminAddingProductCategoryComponent,
    AdminAddingProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
