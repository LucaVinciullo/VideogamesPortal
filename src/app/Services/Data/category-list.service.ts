import { Injectable } from '@angular/core';
import { CategoryItem} from 'src/app/model/category-item';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  private list: CategoryItem[] = [
    { id: 0, description: "Non categorizzato"},
    { id: 1, description: "RPG"},
    { id: 2, description: "PVPRPG"},
    { id: 3, description: "Gestionale"},
    { id: 4, description: "Interazione sociale"},
    { id: 5, description: "Party Game"},
    { id: 6, description: "Carte"},
  ];

  getList(): CategoryItem[] {
    return this.list;
  }

  getItem( i: number) : string{
    return this.list[i].description;
  }
  constructor() { }
}
