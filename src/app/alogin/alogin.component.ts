import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { admin } from './admin';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  admin:admin = new admin();
  message:any;

  constructor(private service:UserserviceService,private route:Router){ }

  ngOnInit(): void {
  }

  public adminlogin()
  {
 
  if((this.admin.username=="") ||(this.admin.password==""))
  {
    alert("Enter all details")
    
  }else{
       let response = this.service.adminlogin(this.admin);
    response.subscribe((data)=> {
    if(data==="true")
    {
      this.route.navigate(['/adminhome'])
    }
    else
    {
      this.message="Invalid Username or Password"
    }
  })
  }
  }
}
