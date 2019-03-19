import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  authentication : boolean = (sessionStorage.getItem('authentication')=='true');

  menuList: MenuItem[] = [
    {id: 1, description: 'Home', path: '/home'},
    {id: 2, description: 'Login', path: '/login'},
    {id: 3, description: 'Lista', path: '/game-list'},  
    {id: 4, description: 'Modifica', path: '/game-edit'}, 
  ];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();
  
  getAuthentication(): void {

   }
  constructor() { 
    
  }

  ngOnInit() {
    this.getAuthentication();
  }

  showSection(id: number){
    this.showSectionEvent.emit(id);
  }
}
