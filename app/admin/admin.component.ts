import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;
  _authserviceService: any;

  constructor(private route:Router,private _authService:AuthserviceService) { }

  ngOnInit(): void {
  }
  // logout():void
  // {
  //   console.log("logout");
  //   this._authService.logOut();
  //   this.route.navigate(['/item']);
  // }

}
