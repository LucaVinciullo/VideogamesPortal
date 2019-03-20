import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  authentication : boolean = (sessionStorage.getItem('authentication')=='true');
  adminAuthentication: boolean = (sessionStorage.getItem('adminAuthentication')=='true');
  username : string = (sessionStorage.getItem('username'));


  menuList: MenuItem[] = [
    {id: 1, description: 'Home', path: '/home'},
    {id: 2, description: 'Login', path: '/login'},
    {id: 3, description: 'Lista', path: '/game-list'},  
    {id: 4, description: 'Modifica', path: '/game-edit'}, 
    {id: 5, description: 'Logout', path: '/logout'} 
  ];

  
  getAuthentication(): void {

   }
  constructor(private loginService : LoginService) { 
    loginService.loginSubject$.subscribe( newValue => {  
      this.authentication = sessionStorage.getItem('authentication')=='true';
      this.username = sessionStorage.getItem('username');
  }); 
  }

  ngOnInit() {
    this.getAuthentication();
  }

}
