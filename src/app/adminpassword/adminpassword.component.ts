import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from '../alogin/admin';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminpassword',
  templateUrl: './adminpassword.component.html',
  styleUrls: ['./adminpassword.component.css']
})
export class AdminpasswordComponent implements OnInit

{
  constructor(private service:UserserviceService,private route:Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  admin :admin = new admin();
  message:any;
  public changepassword(p1:string,p2:string)
      {
      
        if((p1=="")||(p2==""))
        {
          alert("Enter all details")
        }
        else{
        if(p1==p2)
        {
          let response = this.service.adminpassword(p1);
          response.subscribe((data)=> this.message=data)

        }
        else{
          alert("Input does not match")
        }
        }
       
      }

      public back()
  {
    this.route.navigate(['/adminhome'])
  }
}
