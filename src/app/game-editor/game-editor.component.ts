import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styleUrls: ['./game-editor.component.scss']
})
export class GameEditorComponent implements OnInit {
 
  gameForm = new FormGroup({
    search: new FormGroup({
      gameId: new FormControl('')
    }),
    gameName: new FormControl(''),
    gameDescription: new FormControl(''),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.gameForm.value);
  }
  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      search : this.fb.group ({
        gameId: ['']
      }),
      gameName:[''],
      gameDescription: ['']
    })
   }

  ngOnInit() {
  }

}
