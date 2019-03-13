import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  idSectionToShow: number = 1;
  title = 'VideogamesPortal';

  changeSection (id: number){
    this.idSectionToShow(id);
  }
}
