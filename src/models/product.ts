export class Product {

  id:number;
  title:string;
  description:string;
  price:number;
  discountPercentage: number;
  rating: number;
  stock: number | undefined;
  brand: string;
  category: string;
  images: string[];
  constructor(id:number,title:string,description:string,price:number,discountPercentage: number, rating: number, stock: number, brand: string, category: string, images: string[],) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.price=price;
    this.discountPercentage=discountPercentage;
    this.rating=rating;
    this.brand=brand;
    this.category=category
    this.images=images



  }



}
