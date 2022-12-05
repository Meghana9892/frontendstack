import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { user } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:ProductserviceService,
    private route:Router) { }

  cart:any;
  total:any;
  username:any;
  message:any;
  ngOnInit() {
    let response = this.service.cartitems();
    response.subscribe((data)=>
    this.cart=data);
    
    let response1 = this.service.cartTotal();
    response1.subscribe((data)=>
    this.total=data);
    
  }

  public buy()
  {
    this.username= localStorage.getItem('loggedin');
    let response = this.service.buy(this.username);
    response.subscribe((data)=>{
    if(data=="False")
    { 
      this.message="No Item in Cart"
    }
    else{
       this.route.navigate(['/order'])
    }
  })
   
  }
  public back()
  {
    this.route.navigate(['/welcome'])
  }
}
