import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-user-initial',
  templateUrl: './user-initial.component.html'
})
export class UserInitialComponent implements OnInit {
  @Input()
  firstName: string;

  @Input()
  lastName: string;

  /**
   * Specifies an optional CSS class to add to the <div> element (eg, a background color is commonly used to emphasise initials).
   */
  @Input()
  className: string = '';

  /**
   * Delimiter to add between the initials.
   */
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
