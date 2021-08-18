import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class AppConfigComponent {
  @Input()
  showAppConfig: boolean;

  @Input()
  config: string;

  /**
   * Value will be used if the property name is not found.
   */
  @Input()
  fallbackText: string = '';

  configForChaining: string = 'oauth2.publicUrls';

  constructor() {}
}
