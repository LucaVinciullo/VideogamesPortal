import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import {routes} from 'src/app/app.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: MenuItem[] = [
    {id: 1, description: 'Home', path: '/home'},
    {id: 2, description: 'Lista', path: '/game-list'}, 
    {id: 4, description: 'Modifica', path: '/game-edit'}
  ];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showSection(id: number){
    this.showSectionEvent.emit(id);
  }
}
