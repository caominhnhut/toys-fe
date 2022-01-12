import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
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
import { WoodenToysComponent } from './components/wooden-toys/wooden-toys.component';
import { WoodenToysProductComponent } from './components/wooden-toys/wooden-toys-product/wooden-toys-product.component';
import { WoodenToysSidebarComponent } from './components/wooden-toys/wooden-toys-sidebar/wooden-toys-sidebar.component';
import { PlasticToysComponent } from './components/plastic-toys/plastic-toys.component';
import { HatchimalsComponent } from './components/hatchimals/hatchimals.component';
import { ShopkinsComponent } from './components/shopkins/shopkins.component';
import { WeanningComponent } from './components/weanning/weanning.component';
import { PlasticToysProductComponent } from './components/plastic-toys/plastic-toys-product/plastic-toys-product.component';
import { PlasticToysSidebarComponent } from './components/plastic-toys/plastic-toys-sidebar/plastic-toys-sidebar.component';
import { HatchimalsProductComponent } from './components/hatchimals/hatchimals-product/hatchimals-product.component';
import { HatchimalsSidebarComponent } from './components/hatchimals/hatchimals-sidebar/hatchimals-sidebar.component';
import { ShopkinsProductComponent } from './components/shopkins/shopkins-product/shopkins-product.component';
import { ShopkinsSidebarComponent } from './components/shopkins/shopkins-sidebar/shopkins-sidebar.component';
import { WeanningProductComponent } from './components/weanning/weanning-product/weanning-product.component';
import { WeanningSidebarComponent } from './components/weanning/weanning-sidebar/weanning-sidebar.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    AdminAddingProductComponent,
    WoodenToysComponent,
    WoodenToysProductComponent,
    WoodenToysSidebarComponent,
    PlasticToysComponent,
    HatchimalsComponent,
    ShopkinsComponent,
    WeanningComponent,
    PlasticToysProductComponent,
    PlasticToysSidebarComponent,
    HatchimalsProductComponent,
    HatchimalsSidebarComponent,
    ShopkinsProductComponent,
    ShopkinsSidebarComponent,
    WeanningProductComponent,
    WeanningSidebarComponent,
    MessageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
