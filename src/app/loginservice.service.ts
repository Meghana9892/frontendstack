import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public validate(login:login)
  {
    return this.http.post("http://localhost:8019/login",login,{responseType:'text' as 'json'});
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
