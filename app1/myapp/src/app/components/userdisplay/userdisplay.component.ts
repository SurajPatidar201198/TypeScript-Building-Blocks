import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  username = "Suraj Patidar";
  year = 2021

  numberA:number=10;
  numberB:number=20;

  addTwoNumber(){
    return this.numberA+this.numberB;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
