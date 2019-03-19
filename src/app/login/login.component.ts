import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = 'USERNAME';
  password: string = 'PASSWORD';

saveInLocal(key, val): void {
  sessionStorage.setItem(key, val);
   }

  authenticate(): void{
    if ((this.password=="PASSWORD") && (this.username=="USERNAME")){
      this.saveInLocal('authentication',true);
      this.router.navigateByUrl('/home');
    }

  }

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  
  }

}
