import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [

    ProductsDetailsComponent,
    AllProductsComponent,
    ProductItemComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule,
        RouterModule,


    ]
})
export class ProductsModule { }
