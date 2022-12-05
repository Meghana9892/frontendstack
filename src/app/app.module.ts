
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PasswordComponent } from './password/password.component';
import { AloginComponent } from './alogin/alogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { UsersComponent } from './users/users.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminpasswordComponent } from './adminpassword/adminpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    AddproductComponent,
    CartComponent,
    RegisterComponent,
    OrderComponent,
    SearchComponent,
    PurchasesComponent,
    PasswordComponent,
    AloginComponent,
    AdminhomeComponent,
    PurchasehistoryComponent,
    UsersComponent,
    ContactusComponent,
    AdminpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
