import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  forms;
  constructor() { }

  ngOnInit(){
    this.forms = new FormGroup({
      firstname : new FormControl('sayan'),
      lastname : new FormControl(''),
      languages : new FormControl(''),

    });
  }
onSubmit = function (value) {
  console.log(value);
}

}
