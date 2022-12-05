import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  constructor(private service:UserserviceService,
    private route:Router) { }

  items:any;
  username:any;

  ngOnInit(): void {

   
    let response = this.service.users();
    response.subscribe((data)=>
    this.items=data);
  
  }

  public back()
  {
    this.route.navigate(['/adminhome'])
  }
  

}
