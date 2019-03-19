import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logout():void{
    sessionStorage.setItem('authentication', false);
  }

  authenticationTrue(): void {
    sessionStorage.setItem('authentication', true);
     }

  private loginSubject = new Subject<void>();
  public loginSubject$ = this.loginSubject.asObservable();

  changeSubject() { 
    this.loginSubject.next(); 
  }



  constructor() { }
}
