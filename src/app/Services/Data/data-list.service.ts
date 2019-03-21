import { Injectable } from '@angular/core';
import { GameItem } from '../../model/game-item';


@Injectable({
  providedIn: 'root'
})


export class DataListService {
  
  private list: GameItem[] = [
    { id: 1, name: 'Terraforming Mars', description: "Terra lorem ipsum", category: 3, rating: 8, price: 49.99, year: 2017 },
    { id: 2, name: 'Dungeons & Dragons', description: "D&D lorem ipsum", category: 1, rating: 9, price: 69.99, year: 1980 },
    { id: 3, name: 'Awaken', description: "Awaken lorem ipsum", category: 2, rating: 7, price: 34.99, year: 2018 },
    { id: 4, name: 'Lupus in tabula', description: "Lupus lorem ipsum", category: 4, rating: 8, price: 14.99, year: 2000 },
    { id: 5, name: 'Monopoli', description: "Monopoli lorem ipsum", category: 2, rating: 6, price: 49.99, year: 1980 },
    { id: 6, name: 'Risiko', description: "Risiko lorem ipsum", category: 3, rating: 7, price: 34.99, year: 2018 },
    { id: 7, name: 'Sushi Go', description: "Sushi lorem ipsum", category: 5 , rating: 7, price: 34.99, year: 2018 },
    { id: 8, name: 'Sceriffo di Nottingham', description: "Nottingham lorem ipsum", category: 4, rating: 7, price: 34.99, year: 2018 },
    { id: 9, name: 'Puerto Rico', description: "Puerto lorem ipsum", category: 4, rating: 7, price: 34.99, year: 2018 },
    { id: 10, name: 'Rock Paper Wizard', description: "Wizard lorem ipsum", category: 5, rating: 7, price: 34.99, year: 2018 },
    { id: 11, name: 'Dead man tell no tales', description: "Dead man lorem ipsum", category: 0, rating: 7, price: 34.99, year: 2018 },
    { id: 12, name: 'Dice forge', description: "Dice lorem ipsum", category: 5, rating: 7, price: 34.99, year: 2018 },
    { id: 13, name: 'MTG', description: "MTG lorem ipsum", category: 6, rating: 7, price: 34.99, year: 2018 },
    { id: 14, name: 'KeyForge', description: "Keyforge lorem ipsum", category: 6, rating: 7, price: 34.99, year: 2018 },
    { id: 15, name: 'Bang', description: "Bang lorem ipsum", category: 6, rating: 7, price: 34.99, year: 2018 },
    { id: 16, name: 'Citadels', description: "Citadels lorem ipsum", category: 6, rating: 7, price: 34.99, year: 2018 },
    { id: 17, name: 'Cards against humanity', description: "CAH lorem ipsum", category: 5, rating: 7, price: 34.99, year: 2018 },
    { id: 18, name: 'Coloretto', description: "Coloretto lorem ipsum", category: 2, rating: 7, price: 34.99, year: 2018 },
  ];

  getDataList(): GameItem[] {
    return this.list;
  }

  getGame( i: number) : GameItem{
    return this.list[(i-1)];
  }

  constructor() { 

  }
}
