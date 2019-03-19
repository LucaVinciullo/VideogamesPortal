import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GameItem } from '../model/game-item';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../Services/data-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  @Input('input-game-for-detail')
  game: GameItem;
private sub: any;
id : number;  

  constructor(private route: ActivatedRoute, private dataListService: DataListService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
  this.game = this.dataListService.getGame(this.id);
  }

}
