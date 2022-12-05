import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserserviceService,
    private route:Router) { }

  User:user = new user();
  message:any;
  ngOnInit(): void {
  }

  public register()
  {
    if((this.User.firstname=="") || (this.User.lastname=="") || (this.User.username=="") || (this.User.password)=="")
    {
      alert("Enter all details")
    }
    else{
    let response = this.service.adduser(this.User);
    response.subscribe((data)=>  {
      if(data==="true")
      {
        alert("Registration successful");
        this.route.navigate(['/login'])
      }
      else
      {
        this.message="Username exists"
      }
    
  })
    }
    
  }
}
