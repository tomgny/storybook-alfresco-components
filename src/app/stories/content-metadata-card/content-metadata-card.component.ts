import { AppConfigService } from '@alfresco/adf-core';
import { Node } from '@alfresco/js-api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-content-metadata-card',
  templateUrl: './content-metadata-card.component.html',
  styleUrls: ['./content-metadata-card.component.scss']
})
export class ContentMetadataCardComponent implements OnInit {
  @Input()
  node: Node;

  @Input()
  preset: string;

  @Input()
  displayAspect: string;

  @Input()
  displayEmpty: boolean;

  @Input()
  multi: boolean;

  @Input()
  readOnly: boolean;

  @Input()
  displayDefaultProperties: boolean;

  @Input()
  allowCopyingToClipboardAction: boolean;

  constructor(private appConfig: AppConfigService) {
   
  }

  ngOnInit(): void {
    console.log(this.allowCopyingToClipboardAction);
    
    if(this.allowCopyingToClipboardAction) {

      this.appConfig.config['content-metadata'] = {
        "copy-to-clipboard-action": true,
      }
    }
  }
}
