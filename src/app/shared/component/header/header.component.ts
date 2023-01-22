import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products:any[]=[];
  searchFilm: string="";

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
  }



}
