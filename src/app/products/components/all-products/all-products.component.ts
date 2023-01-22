import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../../../models/product";
import {Category} from "../../../../models/category";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  products:Product[]=[]

  categories:any[]=[];

  selectedCategories: any[] = [];


  loading :boolean=false;

  cartProducts:any[]=[];
  searchFilm: string="";

  constructor(private service:ProductsService) {

  }

  ngOnInit(): void {
    this.getProducts(),
      this.getCategories()
  }

  getProducts(){
    this.loading=true;
    this.service.getAllProduct().subscribe((result:any) =>{
      this.products=result.products;
      this.loading=false;
      console.log(result);
    },error => {
      this.loading=false;
      alert('error');
    })
  }
  getCategories(){
    this.loading=true;
    this.service.getAllCategories().subscribe((result:any)=>{

      this.categories=result;
      this.loading=false;

    },error => {
      this.loading=false;
      alert('error');
    })
  }

  filterCategory(event:any){
    let value=event.target.value;
    if(value=='all'){
      this.getProducts();
    }else{
      this.getProductsByCategories(value);
    }

  }


  getProductsByCategories(categorySelected:string){
    this.loading=true;
    this.service.getProductByCategory(categorySelected).subscribe((result:any)=>{
      console.log(result);
      this.products=result.products;
      this.loading=false;
    },error => {
      this.loading=false;
      alert('error');
    })
  }


  addToCart(event: any) {
    if('cart' in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item=>item.item.id == event.item.id)
      if(exist){
        alert("product is already in your cart")
      }else{
        if (event.quantity>0){
          this.cartProducts.push(event)
          localStorage.setItem('cart',JSON.stringify(this.cartProducts))
        }else{
          alert('You must to choose one')
        }


      }
    }else {
      if (event.quantity>0){
        this.cartProducts.push(event)
        localStorage.setItem('cart',JSON.stringify(this.cartProducts))
      }else{
        alert('You must to choose one')
      }
    }

  }





  getProductsByManyCategories(selectedCategories: any[]) {
    this.loading = true;
    for (let i = 0; i < selectedCategories.length; i++) {
      this.getProductsByCategories(selectedCategories[i]);
    }
  }

  searchFor(val: any) {
    this.service.searchFor(val).subscribe((res:any)=>{
      console.log(res.products);
      this.products=[]
      this.products=res.products;
    });
  }




}
