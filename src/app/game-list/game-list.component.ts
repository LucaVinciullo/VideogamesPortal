import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList: GameItem[] = [
    {id: 1, description: 'Terraforming Mars'},
    {id: 2, description: 'Dungeons & Dragons'},
    {id: 3, description: 'Awaken'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
