import {  Component, Input, ViewEncapsulation } from '@angular/core';

import { Button } from './button';

@Component({
  selector: 'aca-buttons-menu',
  templateUrl: './my-buttons-menu.component.html',
  styleUrls: ['./my-buttons-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyButtonsMenuComponent {
  @Input()
  buttonsToRender: Button[] = [];

  alertFunctionName(functionName: string) {
    alert(functionName);
  } 
}
