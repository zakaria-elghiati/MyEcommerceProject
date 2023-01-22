import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id:any;
  data:any={};
  quantite:number =0;
  loading :boolean=false;

  constructor(private route:ActivatedRoute,private service:ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading=true;
    this.service.getProductById(this.id).subscribe(result=>{
      this.data=result;
      console.log(result)
      this.loading=false;

    })
  }

  getColor() {
    if (this.data.stock > 0) {
      return "green";
    } else {
      return "red";
    }
  }

  estDisponible() :boolean{
    return this.data.stock>0;

  }


}
