import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProduct(){
    console.log( this.http.get(environment.baseURL+'products'))
    return  this.http.get(environment.baseURL+'products')
  }

  getAllCategories(){
    return this.http.get(environment.baseURL+'products/categories')
  }


  getProductByCategory(category:string){
    return this.http.get(environment.baseURL+'products/category/'+category );

  }

  getProductById(id:any) {
    return this.http.get(environment.baseURL + 'products/' + id);

  }

  searchFor(title: string) {
    const url = "https://dummyjson.com/products/search?q=" + title;
    return this.http.get(url);
  }
}

