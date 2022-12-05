import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent  implements OnInit{

  constructor(private route:Router,
    private service:ProductserviceService) { }

    items:any;
 p:product = new product();
 message:any;


  ngOnInit() {

    let response = this.service.products();
    response.subscribe((data)=>
    this.items=data);
    
  }

  public deleteproduct(i:any)
  {
    this.p=i;
    let response = this.service.deleteprod(this.p);
    response.subscribe((data)=>this.message=data);
    alert("Product Deleted");
    let response1 = this.service.products();
    response1.subscribe((data)=>
    this.items=data);
  }

  public signout()
  {
  
    this.route.navigate(['/alogin']);
  }
}
