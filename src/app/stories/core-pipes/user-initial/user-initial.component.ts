import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-user-initial',
  templateUrl: './user-initial.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class UserInitialComponent implements OnInit {
  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  className: string = '';

  @Input()
  delimiter: string = '';

  user: any;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      firstName: this.firstName,
      lastName: this.lastName
    };
  }
}
