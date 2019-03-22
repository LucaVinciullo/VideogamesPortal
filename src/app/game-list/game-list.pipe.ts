import { Pipe, PipeTransform } from '@angular/core';
import { GameItem } from '../model/game-item';


@Pipe({ name: 'categoryFilter' })
export class GameListPipe implements PipeTransform {
  transform(allHeroes: GameItem[], category: number) {
    return allHeroes.filter(item => item.category == category);
  }
}

