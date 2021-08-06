import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'aca-user-info',
  templateUrl: './user-info.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserInfoComponent {

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

  constructor() { }

}
