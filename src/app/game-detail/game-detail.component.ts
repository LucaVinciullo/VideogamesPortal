import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../model/game-item';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from 'src/app/Services/Data/data-list.service';
import { LoginService } from '../Services/login.service';
import { CategoryListService } from '../Services/Data/category-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {
  adminAuthentication: boolean = (sessionStorage.getItem('administrator')=='true');
  game: GameItem;
  private sub: any;
  id : number;  
  category:string;

  constructor(private route: ActivatedRoute, private dataListService: DataListService, private loginService : LoginService, private categoryListService : CategoryListService ) { 
    loginService.loginSubject$.subscribe( newValue => {  
      this.adminAuthentication = (sessionStorage.getItem('administrator') == 'true');
  });

  this.id = this.route.snapshot.params['id'];
  this.game = this.dataListService.getGame(this.id);
  this.category = this.categoryListService.getItem(this.game.category);
  }

  ngOnInit() {  }

}
