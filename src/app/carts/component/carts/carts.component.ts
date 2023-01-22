import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../models/product";
import {CartsService} from "../../services/carts.service";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  element:Array<Product>=[];
  quantity:number=0;
  total:any=0
  cartProducts: any[]=[];
  success: boolean=false;
  constructor(private service:CartsService) { }

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    console.log(this.cartProducts)
    this.getCartTotal();
  }

  getCartTotal(){
    this.total=0
    for(let x in this.cartProducts){
      this.total=this.total+this.cartProducts[x].item.price*this.cartProducts[x].quantity;

    }
  }

  minsAmount(index: number) {
    if(this.cartProducts[index].quantity>0){
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }else{
      this.cartProducts[index].quantity=0;
    }


  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))

  }

  detectChange() {
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));
    this.getCartTotal();

  }

  detectDelete(index: number) {
    this.cartProducts.splice(index,1);
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));


  }

  clearCart() {
    this.cartProducts=[];
    this.getCartTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts));

  }


}
