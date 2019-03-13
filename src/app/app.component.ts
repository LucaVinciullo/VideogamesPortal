import { Component } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameToShow: GameItem = null;
  idSectionToShow: number = 1;
  title = 'VideogamesPortal';

  changeSection (id: number){
    this.idSectionToShow= id;
  }
  
  selectGame (game: GameItem){
    this.idSectionToShow= 3;
    this.gameToShow = game;
  }
}
