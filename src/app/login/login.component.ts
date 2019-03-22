import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: {username: string, password: string} = {
    username: 'ADMINISTRATOR',
    password: 'ADMIN'
  }

  onSubmit(): void{
    if ((this.model.password=="PASSWORD") && (this.model.username=="USERNAME")){
      this.loginService.authenticationTrue(this.model.username);
      this.loginService.changeSubject();
      this.router.navigateByUrl('/home');
    }

    if ((this.model.password=="ADMIN") && (this.model.username=="ADMINISTRATOR")){
      this.loginService.authenticationAdministrator(this.model.username);
      this.loginService.changeSubject();
      this.router.navigateByUrl('/home');
    }
  }

  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit() {
  
  }

}
