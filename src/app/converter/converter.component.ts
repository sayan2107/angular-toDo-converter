import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
forms;
  constructor() { }

  ngOnInit() {
    this.forms=new FormGroup({
      decimal:new FormControl(''),
      binary:new FormControl(''),
      octal:new FormControl(''),
      hexa:new FormControl('')
    });
  }

  decimalChanged = function (newValue) {
    if (newValue!=""){
   this.forms.patchValue({binary : parseInt(newValue, 10).toString(2)});
      this.forms.patchValue({octal : parseInt(newValue, 10).toString(8)});
      this.forms.patchValue({hexa : parseInt(newValue, 10).toString(16).toLocaleUpperCase()});
    }else{
      this.forms.patchValue({binary : ""});
      this.forms.patchValue({octal : ""});
      this.forms.patchValue({hexa : ""});

    }
  }
  b = 0;
  o = 0;
  h =0;

  binaryChanged = function (newValue) {
    this.b = this.b + 1;
    if(this.b == 1){
      if (newValue!=""){
        this.forms.patchValue({decimal : parseInt(newValue, 2).toString(10)});
      }else{
        this.forms.patchValue({decimal : ""});
      }
      this.b = 0;
    }

  }


  octalChanged = function (newValue) {
    this.o = this.o + 1;
    if(this.o == 1){
      if (newValue!=""){
        this.forms.patchValue({decimal : parseInt(newValue, 8).toString(10)});
      }else{
        this.forms.patchValue({decimal : ""});
      }
      this.o = 0;
    }

  }


  hexaChanged = function (newValue) {
    this.h = this.h + 1;
    if(this.h == 1){
      if (newValue!=""){
        this.forms.patchValue({decimal : parseInt(newValue, 16).toString(10)});
      }else{
        this.forms.patchValue({decimal : ""});
      }
      this.h = 0;
    }

  }



  // onSubmit = function(value) {
  //   console.log(value);
  // }

}
