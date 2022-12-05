import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { user } from '../user';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor(private service:ProductserviceService,
    private route:Router) { }

  items:any;
  username:any;
  ngOnInit(): void {

    this.username= localStorage.getItem('loggedin');
    let response = this.service.vieworderhistory(this.username);
    response.subscribe((data)=>
    this.items=data);
  
  }

  public back()
  {
    this.route.navigate(['/welcome'])
  }

}
