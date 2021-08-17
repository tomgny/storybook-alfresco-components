import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class AppConfigComponent implements OnInit {
  @Input()
  showAppConfig: boolean;

  @Input()
  config: string;

  @Input()
  fallbackText: string = '';

  configForChaining: string = 'oauth2.publicUrls';

  constructor() { }

  ngOnInit(): void {
  }

}
