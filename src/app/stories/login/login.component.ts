import { AppConfigService } from '@alfresco/adf-core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { setIsOuathReturnValue } from './authentication-stub.service';

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

  @Input()
  useCustomValidation: boolean;

  @Input()
  ssoLogin: boolean;

  @Input()
  silentLogin: boolean;

  @Input()
  useCustomErrorHandlingMethod: boolean;

  @Input()
  useCustomExecuteSubmitMethod: boolean;

  @ViewChild('alfrescoLogin')
  alfrescoLogin: any;

  /**
   * Custom validation rules for the login form.
   */
  fieldsValidation: any;

  constructor(private appConfigService: AppConfigService) {}

  ngOnChanges() {
    setIsOuathReturnValue(this.ssoLogin);
    if (this.ssoLogin) {
      this.appConfigService.config['authType'] = 'OAUTH';
      this.appConfigService.config['oauth2'] = {
        ...this.appConfigService.config['oauth2'],
        silentLogin: this.silentLogin
      };
    }
  }

  ngOnInit(): void {
    if (this.useCustomValidation) {
      this.fieldsValidation = {
        username: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
        password: ['', Validators.required]
      };
    }
  }

  ngAfterViewInit() {
    if (this.useCustomValidation) {
      this.alfrescoLogin.addCustomValidationError('username', 'minlength', 'Username must be at least 10 characters.', { minLength: 10 });
    }
  }

  customSuccessMethod(_: any) {
    alert(`You would be redirected to login success page!
This alert was displayed by handling success event.`);
  }

  customErrorMethod(_: any) {
    if (this.useCustomErrorHandlingMethod) alert(`This alert was displayed by handling error event.`);
  }

  executeSubmit(_: any) {
    if (this.useCustomExecuteSubmitMethod) alert(`This alert was displayed by handling form submitting event.`);
  }
}
