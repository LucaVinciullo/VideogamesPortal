import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppComponent } from './app.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginGuardService } from './Services/AuthGuard/login-guard.service';
import { LogoutGuardService } from './Services/AuthGuard/logout-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuardService] },
  { path: 'game-list', component: GameListComponent, canActivate: [LoginGuardService]  },
  { path: 'game-detail/:id', component: GameDetailComponent, canActivate: [LoginGuardService] },
  { path: 'game-edit', component: EditGameComponent, canActivate: [LoginGuardService]},
  { path: 'logout', component: LogoutComponent},
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
    LoginComponent,
    LogoutComponent,

  ],
  imports: [  
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    StorageServiceModule,
    
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
