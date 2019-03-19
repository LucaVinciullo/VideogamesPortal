import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  dataList : GameItem[];

  getData():void {
    this.dataList = this.dataListService.getDataList();
  }

  @Output('showGameDetail')
  showGameEvent: EventEmitter<GameItem> = new EventEmitter();
  
  showGameDetail(game: GameItem){
    this.showGameEvent.emit(game);
  }

  constructor(private dataListService: DataListService) { }

  ngOnInit() {
    this.getData();
  }

}
