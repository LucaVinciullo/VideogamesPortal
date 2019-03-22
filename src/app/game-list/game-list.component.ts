import { Component, OnInit,  Input, } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { DataListService } from 'src/app/Services/Data/data-list.service';
import { CategoryItem } from 'src/app/model/category-item';
import { CategoryListService} from '../Services/Data/category-list.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {
  dataList : GameItem[];
  filteredList : GameItem[];
  categoryList : CategoryItem[];
  category: CategoryItem;
  categoryValue:number;

  getData():void {
    this.dataList = this.dataListService.getDataList();
    this.categoryList = this.categoryListService.getList();
    this.filteredList = this.dataList;
  }
  
  filterList():void {
    if (this.categoryValue == (-1)){
      this.filteredList = this.dataList;
  } else {
    this.filteredList = this.dataListService.getFilteredList(this.dataList, this.categoryValue);
  }
  };

  constructor(private dataListService: DataListService, private categoryListService : CategoryListService) { 
    this.getData(); 
  }

  ngOnInit() {
  }

}
