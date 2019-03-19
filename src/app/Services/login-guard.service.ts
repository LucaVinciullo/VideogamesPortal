import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  result: boolean;

  canActivate() {
   this.result = (sessionStorage.getItem('authentication')=='true');
   return this.result;
  }

  canDeactivate(){
    this.result = (sessionStorage.getItem('authentication')=='false')
  }
  constructor() { }
}
