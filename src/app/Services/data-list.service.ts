import { Injectable } from '@angular/core';
import { GameItem } from '../model/game-item';

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  
  private list: GameItem[] = [
    { id: 1, name: 'Terraforming Mars', description: "Terra lorem ipsum", category: "German", rating: 8, price: 49.99, year: 2017 },
    { id: 2, name: 'Dungeons & Dragons', description: "D&D lorem ipsum", category: "Role play", rating: 9, price: 69.99, year: 1980 },
    { id: 3, name: 'Awaken', description: "Awaken lorem ipsum", category: "Role play", rating: 7, price: 34.99, year: 2018 }
  ];

  getDataList(): GameItem[] {
    return this.list;
  }

  getGame( i: number) : GameItem{
    return this.list[(i-1)];
  }

  public getInstance() : DataListService{
  
  return null;
  }

  constructor() { 

  }
}
