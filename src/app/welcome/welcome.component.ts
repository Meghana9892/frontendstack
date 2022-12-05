import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:ProductserviceService,
    private route:Router) {
     }

  items:any;
 p:product = new product();
 message:any;
 searchitems:any;
 user:any;

 
 quantity:any;
  
 cartproducts:{productname:string;quantity:any}[]=[];
 
  
  ngOnInit() {
    let response = this.service.products();
    response.subscribe((data)=>
    this.items=data);
    this.user=localStorage.getItem('loggedin');
  

  }

  public additem(i:any)
  {
    this.p=i;
    let response = this.service.addtocart(this.p);
    response.subscribe((data)=>
    this.message=data);
   alert("Item Added to Cart");

  }
  public signout()
  {
    
    localStorage.clear();
    this.route.navigate(['']);
  }

  public viewcart()
  {
    this.route.navigate(['/cart']);
  }

  public searchbyCategory(search:string)
  {
    if(search=="")
    {
      alert("Enter Item to search")
    } 
    else{
   this.route.navigateByUrl('/search',{state:{search }});
    }
  }
 
}
