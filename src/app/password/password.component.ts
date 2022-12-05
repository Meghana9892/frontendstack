import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  User:user = new user();
  uname:any;
  message:any
  constructor(private service:UserserviceService,
    private route:Router) { }

    ngOnInit(): void {
    }
  
    public changepassword(p1:string,p2:string)
      {
        this.uname=localStorage.getItem('loggedin')
        if((p1=="")||(p2==""))
        {
          alert("Enter all details")
        }
        else{
        if(p1==p2)
        {
          this.User.password=p1;
          this.User.username=this.uname;
          let response = this.service.changepassword(this.User)
          response.subscribe((data)=> this.message=data)

        }
        else{
          alert("Input does not match")
        }
        }
       
      }

      public back()
  {
    this.route.navigate(['/welcome'])
  }
}
