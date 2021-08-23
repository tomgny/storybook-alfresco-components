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

  /**
   * The copyright text below the login box.
   */
  @Input()
  copyrightText: string;

  /**
   * Path to a custom logo image.
   */
  @Input()
  logoImageUrl: string;

  /**
   * Path to a custom background image.
   */
  @Input()
  backgroundImageUrl: string;

  /**
   * Sets the URL of the NEED HELP link in the footer.
   */
  @Input()
  needHelpLink: string;

  /**
   * Sets the URL of the REGISTER link in the footer.
   */
  @Input()
  registerLink: string;

  @Input()
  showCustomHeader: boolean;

  @Input()
  showCustomFooter: boolean;

  @Input()
  headerText: string;

  @Input()
  footerText: string;

  @Input()
  showCustomContent: boolean;

  @Input()
  customContent: string;

  constructor() {}

  ngOnInit(): void {}
}
