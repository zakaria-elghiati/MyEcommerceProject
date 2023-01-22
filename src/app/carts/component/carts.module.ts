import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartsComponent} from "./carts/carts.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CartsComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterLink,

    ]
})
export class CartsModule { }
