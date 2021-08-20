import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { setProvider } from './mock/stub-authentication-service';

@Component({
  selector: 'aca-user-info',
  templateUrl: './user-info.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnChanges {
  /**
   * Custom path for the background banner image for APS users.
   */
  @Input()
  bpmBackgroundImage: string;

  /**
   * Custom path for the background banner image for ACS users.
   */
  @Input()
  ecmBackgroundImage: string;

  /**
   * Custom choice for opening the menu at the bottom. Can be before or after.
   */
  @Input()
  menuPositionX: MenuPositionX;

  /**
   * Custom choice for opening the menu at the bottom. Can be above or below.
   */
  @Input()
  menuPositionY: MenuPositionY;

  /**
   * When the username is shown, this defines its position relative to the user info button. Can be right or left.
   */
  @Input()
  namePosition: string;

  /**
   * Shows/hides the username next to the user info button.
   */
  @Input()
  showName: boolean;

  @Input()
  userLoggedInWith: 'ecm' | 'bpm' | 'both' | 'sso' | 'ssoAndEcm';

  constructor() {}

  ngOnChanges() {
    setProvider(this.userLoggedInWith);
  }
}
