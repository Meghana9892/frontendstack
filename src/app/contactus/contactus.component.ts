import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  constructor(private route:Router){}
  ngOnInit(): void {
  }

  public back()
  {
    this.route.navigate(['/adminhome'])
  }
}
