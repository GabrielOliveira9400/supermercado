import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import {ProductService} from "../product.service";
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan..`;
  products!: Product[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

}
