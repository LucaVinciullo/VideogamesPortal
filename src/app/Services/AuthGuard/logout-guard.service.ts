import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  result: boolean;
  
  canActivate(){
    this.result = (sessionStorage.getItem('authentication')=='true')
    this.result = !this.result;
    return this.result;
  }

  constructor() { }
}
