import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {

  constructor(private service:ProductserviceService,
    private route:Router) { }

  items:any;
  username:any;
  ngOnInit(): void {

   
    let response = this.service.orderhistory();
    response.subscribe((data)=>
    this.items=data);
  
  }

  public back()
  {
    this.route.navigate(['/adminhome'])
  }
}
