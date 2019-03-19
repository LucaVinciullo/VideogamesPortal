import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game-list', component: GameListComponent },
  { path: 'game-detail/:id', component: GameDetailComponent },
  { path: 'game-edit', component: EditGameComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EditGameComponent,
    GameDetailComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent,
    FooterComponent,

  ],
  imports: [  
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
      
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
