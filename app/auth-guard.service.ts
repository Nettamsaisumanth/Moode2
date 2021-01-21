import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn = false;
    
  constructor(private _router : Router, private _authserviceService :AuthserviceService){
  }
 
  canActivate(route: ActivatedRouteSnapshot): boolean{        
      this.isLoggedIn = this._authserviceService.loggedIn;
      console.log("isLoggedIn: " + this.isLoggedIn);
      if(this.isLoggedIn){
          return true;
      }
      else{
          this._router.navigate(['Login']);
          return false;
      }        
  }  
               
} 