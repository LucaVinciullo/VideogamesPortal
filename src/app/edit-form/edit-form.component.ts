import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  
  editForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

}
