import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: MenuItem[] = [
    {id: 1, description: 'Home', selected: true},
    {id: 2, description: 'Lista', selected: false},
    {id: 3, description: 'Detraglio', selected: false},
    {id: 4, description: 'Modifica', selected: false}
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
