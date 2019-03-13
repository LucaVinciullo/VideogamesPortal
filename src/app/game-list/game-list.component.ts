import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList: GameItem[] = [
    {id: 1, name: 'Terraforming Mars', description: "Terra lorem ipsum", category:"German", rating: 8, prezzo: 49.99, year: 2017},
    {id: 2, name: 'Dungeons & Dragons', description: "D&D lorem ipsum", category:"Role play", rating: 9, prezzo: 69.99, year: 1980},
    {id: 3, name: 'Awaken', description: "Awaken lorem ipsum", category:"Role play", rating: 7, prezzo: 34.99, year: 2018}
  ];

  @Output('showGameDetail')
  showGameEvent: EventEmitter<GameItem> = new EventEmitter();
  
  showGameDetail(game: GameItem){
    this.showGameEvent.emit(game);
  }

  constructor() { }

  ngOnInit() {
  }

}
