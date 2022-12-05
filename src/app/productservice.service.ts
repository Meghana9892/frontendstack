import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  

  constructor(private http:HttpClient) { }

  public addprod(p:product)
  {
    return this.http.post("http://localhost:8019/addproduct",p,{responseType:'text' as 'json'});
  }


  public products()
  {
    return this.http.get("http://localhost:8019/items");
  }

  public addtocart(p:any)
  {
    return this.http.post("http://localhost:8019/addcart",p,{responseType:'text' as 'json'});
  }

  public cartitems()
  {
    return this.http.get("http://localhost:8019/cart");
  }

  public cartTotal()
  {
    return this.http.get("http://localhost:8019/carttotal",{responseType:'integer' as 'json'});
  }

  public buy(username:string)
  {
    return this.http.post("http://localhost:8019/buy",username,{responseType:'text' as 'json'});
  }

  public productsbysearch(search:any)
  {
    return this.http.post("http://localhost:8019/searchby",search);
  }

  public vieworderhistory(username:any)
  {
    return this.http.post("http://localhost:8019/purchases",username);

  }
  public orderhistory()
  {
    return this.http.get("http://localhost:8019/purchasehistory");

  }
  public deleteprod(p:product)
  {
    return this.http.post("http://localhost:8019/delete",p,{responseType:'text' as 'json'});
  }
  
}
