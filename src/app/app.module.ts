import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GameListComponentComponent } from './game-list-component/game-list-component.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HomeComponentComponent,
    GameListComponentComponent,
    EditGameComponent,
    GameDetailComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
