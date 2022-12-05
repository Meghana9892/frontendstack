import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from './alogin/admin';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  public adduser(user:user)
  {
    return this.http.post("http://localhost:8019/adduser",user,{responseType:'text' as 'json'});

  }
  public users()
  {
    return this.http.get("http://localhost:8019/users");

  }
  public changepassword(user:user)
  {

    return this.http.post("http://localhost:8019/password",user,{responseType:'text' as 'json'});

  }
  public adminpassword(password:string)
  {

    return this.http.post("http://localhost:8019/changepassword",password,{responseType:'text' as 'json'});

  }

  public adminlogin(admin:admin)
  {

    return this.http.post("http://localhost:8019/adminlogin",admin,{responseType:'text' as 'json'});

  }
}
