import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class FullNameComponent implements OnInit {
  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  username: string;

  @Input()
  email: string;

  user: any;


  constructor() { }

  ngOnInit(): void {
    this.user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
  }

}
