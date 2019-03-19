import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
 

  constructor(private loginService: LoginService, private router : Router) { 
  this.loginService.logout();
  this.loginService.changeSubject();
  this.router.navigateByUrl('/home');
}
  ngOnInit() {
  }

}
