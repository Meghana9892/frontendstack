import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductserviceService } from '../productservice.service';
import { product } from '../Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:any;
  result:any;
  message:any;
  p:product = new product();

 
  constructor(private route:Router,
    private service:ProductserviceService) {
 
  
   }
  
  ngOnInit(): void {
     this.search= history.state.search;
     let response = this.service.productsbysearch(this.search);
     response.subscribe((data)=>this.result=data);
    
  }

  public additem(i:any)
  {
    this.p=i;
    let response = this.service.addtocart(this.p);
    response.subscribe((data)=>
    this.message=data);
   alert("Item Added to Cart");

  }
  public viewcart()
  {
    this.route.navigate(['/cart']);
  }

  public back()
  {
    this.route.navigate(['/welcome'])
  }
  public signout()
  {
    
    localStorage.clear();
    this.route.navigate(['']);
  }
}
