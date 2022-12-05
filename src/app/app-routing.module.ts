import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminpasswordComponent } from './adminpassword/adminpassword.component';
import { AloginComponent } from './alogin/alogin.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PasswordComponent } from './password/password.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { PurchasesComponent } from './purchases/purchases.component';

import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [

  {
    
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'addproduct',
    component:AddproductComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'purchases',
    component:PurchasesComponent
  },
  {
    path:'password',
    component:PasswordComponent
  },
  {
    path:'alogin',
    component:AloginComponent
  },
  {
    path:'adminhome',
    component:AdminhomeComponent
  },
  {
    path:'purchasehistory',
    component:PurchasehistoryComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'adminpassword',
    component:AdminpasswordComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
