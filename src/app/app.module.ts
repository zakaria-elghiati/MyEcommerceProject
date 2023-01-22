import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsComponent } from './carts/component/carts/carts.component';
import {SharedModule} from "./shared/shared.module";
import {CommonModule} from "@angular/common";
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductItemComponent} from "./products/components/product-item/product-item.component";
import {ProductsDetailsComponent} from "./products/components/products-details/products-details.component";

import {CartsModule} from "./carts/component/carts.module";
import {AuthModule} from "./Auth/auth.module";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {ProductsModule} from "./products/products.module";



@NgModule({
    declarations: [

        AppComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CartsModule,
    CommonModule,
    AuthModule,
    ProductsModule


  ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
