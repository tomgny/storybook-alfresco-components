import { AppConfigService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-about-github-link',
  templateUrl: './about-github-link.component.html',
})
export class AboutGithubLinkComponent implements OnInit {
  /**
   * Title of app running
   */
  @Input()
  application: string;

  /**
   * The GitHub commit that corresponds to the version of ADF in use.
   */
  @Input()
  url: string;

  /**
   * A number displaying the version of ADF in use.
   */
  @Input()
  version: string;

  constructor(private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    if (this.application === '') this.application = this.appConfigService.get<string>('application.name');
  }
}
