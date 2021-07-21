import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
})
export class MytestComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(`Current value of testBoolean is ${this.testBoolean}`);
  }

  @Input()
  testBoolean: boolean;

}
