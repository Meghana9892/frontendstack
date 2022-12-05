import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Product';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private service:ProductserviceService,
    private route:Router) { }

  ngOnInit(): void {
  }

  product:product = new product();
  
  
  output:any;

  public addproduct()
  {
   
    if((this.product.productname=="") || (this.product.category=="") || (this.product.price==""))
    {
      alert("Enter all details")
    }
    else{
      
    let response = this.service.addprod(this.product);
    response.subscribe((data)=>this.output=data);
    alert("Product Added");
    
    }
   
  }

  public back()
  {
    this.route.navigate(['/adminhome'])
  }
}
function hasValues() {
  throw new Error('Function not implemented.');
}

