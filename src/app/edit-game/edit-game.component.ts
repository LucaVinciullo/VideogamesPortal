import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../model/game-item';
import { DataListService } from 'src/app/Services/Data/data-list.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  dataList : GameItem[];

  getData():void {
    this.dataList = this.dataListService.getDataList();
  }
  
  searchId(): void {}

  constructor(private dataListService : DataListService) { }

  ngOnInit() {
    this.getData();
  }

}
