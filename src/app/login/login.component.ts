import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = 'USERNAME';
  password: string = 'PASSWORD';

  authenticate(): void{
    if ((this.password=="PASSWORD") && (this.username=="USERNAME")){
      this.loginService.authenticationTrue(this.username);
      this.loginService.changeSubject();
      this.router.navigateByUrl('/home');
    }

    if ((this.password=="ADMIN") && (this.username=="ADMINISTRATOR")){
      this.loginService.authenticationTrue(this.username);
      this.loginService.changeSubject();
      this.router.navigateByUrl('/home');
    }
  }

  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit() {
  
  }

}
