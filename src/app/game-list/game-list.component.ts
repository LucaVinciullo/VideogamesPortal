import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { DataListService } from 'src/app/Services/Data/data-list.service';

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
  
  constructor(private dataListService: DataListService) { }

  ngOnInit() {
    this.getData();
  }

}
