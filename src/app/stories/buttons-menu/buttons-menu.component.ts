import { CoreModule } from '@alfresco/adf-core';
import { Component, Input, NgModule, ViewEncapsulation } from '@angular/core';

import { Button } from './button';

@Component({
  selector: 'aca-buttons-menu',
  templateUrl: './buttons-menu.component.html',
  styleUrls: ['./buttons-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsMenuComponent {
  @Input()
  buttonsToRender: Button[] = [];

  alertFunctionName(functionName: string) {
    alert(functionName);
  }
}

@NgModule({
  declarations: [ButtonsMenuComponent],
  imports: [CoreModule.forChild()],
  exports: [ButtonsMenuComponent]
})
export class ButtonsMenuModule {}
