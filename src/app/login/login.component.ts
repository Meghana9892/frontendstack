import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { login } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:login = new login();
  
  
  constructor(private service:LoginserviceService,
    private route:Router){ }

  ngOnInit(): void {
  }
message:any;
output:any;

  public loginuser()
  {
   
    let response = this.service.validate(this.login);
    if((this.login.username=="")||(this.login.password==""))
    {
      alert("Enter all details")
    }
    else{
    response.subscribe((data)=>  {
      if(data==="true")
      {
        this.route.navigate(['/welcome'])
      }
      else
      {
        this.message="Invalid Username or Password"
      }
    
  })
  localStorage.setItem('loggedin', this.login.username);
    }
  }

  public register()
  {
    this.route.navigate(['/register'])
  }  
  
}
