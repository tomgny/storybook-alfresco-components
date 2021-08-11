import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { setProvider } from './mock/stub-authentication-service';

@Component({
  selector: 'aca-user-info',
  templateUrl: './user-info.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnChanges {
  @Input()
  bpmBackgroundImage: string;

  @Input()
  ecmBackgroundImage: string;

  @Input()
  menuPositionX: MenuPositionX;

  @Input()
  menuPositionY: MenuPositionY;

  @Input()
  namePosition: string;

  @Input()
  showName: boolean;

  @Input()
  userLoggedInWith: 'ecm' | 'bpm' | 'both' | 'sso' | 'ssoAndEcm';

  constructor() {}

  ngOnChanges() {
    setProvider(this.userLoggedInWith);
  }
}
