import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CardWishlistComponent } from './card-wishlist/card-wishlist.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuardGuard } from './auth-guard.guard';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const appRoutes: Routes = [
  {path: "", component: ProductPageComponent},
  {path: "product/:id", component: ProductDetailsPageComponent},
  {path: "wishlist", component: WishlistPageComponent, canActivate: [authGuardGuard]},
  {path: "cart", component: CartPageComponent, canActivate: [authGuardGuard]},
  {path: "checkout", component: CheckoutPageComponent,canActivate: [authGuardGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: SignupComponent},
  {path: "profile", component: ProfilepageComponent,canActivate: [authGuardGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CardProductComponent,
    ProductDetailsPageComponent,
    LoaderComponent,
    SidebarComponent,
    WishlistPageComponent,
    CartPageComponent,
    CardWishlistComponent,
    CheckoutPageComponent,
    LoginComponent,
    SignupComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
