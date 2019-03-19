import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GameItem } from '../model/game-item';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  @Input('input-game-for-detail')
  game: GameItem;

  constructor() { }

  ngOnInit() {
  }

}
