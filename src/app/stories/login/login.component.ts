import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  /**
   * Should the Remember me checkbox be shown? When selected, this option will remember the logged-in user after the browser is closed to avoid logging in repeatedly.
   */
  @Input()
  showRememberMe: boolean;

  /**
   * Should the extra actions (Need Help, Register, etc) be shown?
   */
  @Input()
  showLoginActions: boolean;

  constructor() {}

  ngOnInit(): void {}
}
