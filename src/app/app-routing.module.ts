import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductsDetailsComponent} from "./products/components/products-details/products-details.component";
import {CartsComponent} from "./carts/component/carts/carts.component";
import {DashbordComponent} from "./Auth/component/profile/dashbord.component";
import {ForgotPasswordComponent} from "./Auth/component/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./Auth/component/verify-email/verify-email.component";
import {SignInComponent} from "./Auth/component/sign-in/sign-in.component";
import {SignUpComponent} from "./Auth/component/sign-up/sign-up.component";
import {AuthGuard} from "./Auth/guard/auth.guard";


const routes: Routes = [
  {
    path:"products",
    component:AllProductsComponent
  },
  {
    path:"details/:id",
    component:ProductsDetailsComponent
  },
  {
    path:"carts",
    component:CartsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashbordComponent,canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
  ,{
    path:"**",
    redirectTo:"products",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
