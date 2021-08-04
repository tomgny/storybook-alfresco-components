import {  Component, Input, ViewEncapsulation } from '@angular/core';

import { Button } from './button';

@Component({
  selector: 'aca-buttons-menu',
  templateUrl: './buttons-menu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonsMenuComponent {
  @Input()
  buttonsToRender: Button[] = [];

  alertFunctionName(functionName: string) {
    alert(functionName);
  } 
}
