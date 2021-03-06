import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import {Product} from "./product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:4000/produto"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) {

  }
  showMessage(msg: string):void {
    this.snackBar.open(msg,'', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(_id: any):Observable<Product>{
    const  url = `${this.baseUrl}/${_id}`
    return this.http.get<Product>(url)
  }
  update(product: Product):Observable<Product>{
    const  url = `${this.baseUrl}/${product._id}`
    return this.http.put<Product>(url, product)
  }
}
