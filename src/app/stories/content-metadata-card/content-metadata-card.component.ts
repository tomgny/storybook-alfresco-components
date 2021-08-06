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

  @Input()
  allowMultiValueChips: boolean;

  @Input()
  customSeparatorForMultiValueProperties: string;

  // copyToClipboardAction: boolean = true;

  constructor(private appConfig: AppConfigService) {
    // console.log(this.appConfig.config['content-metadata']);
    // this.copyToClipboardAction = this.appConfig.get<boolean>('content-metadata.copy-to-clipboard-action');
    // console.log(this.copyToClipboardAction);
    
    
    this.appConfig.config['content-metadata'] = {
      presets: {
        custom: [
          {
            includeAll: true,
            exclude: [
              'rn:renditioned',
              'cm:versionable',
              'cm:auditable',
              'cm:thumbnailModification',
              'cm:content',
              'cm:author',
              'cm:titled',
              'cm:generalclassifiable',
              'cm:taggable',
              'dp:restrictable',
              'fm:commentsRollup',
              'qshare:shared',

              'exif:exif',
              'cm:effectivity',

              'cm:likesRatingSchemeRollups',
              'cm:lockable',
              'cm:ownable'
            ]
          },
          {
            title: 'APP.CONTENT_METADATA.EXIF_GROUP_TITLE',
            items: [
              {
                aspect: 'exif:exif',
                properties: [
                  'exif:pixelXDimension',
                  'exif:pixelYDimension',
                  'exif:dateTimeOriginal',
                  'exif:exposureTime',
                  'exif:fNumber',
                  'exif:flash',
                  'exif:focalLength',
                  'exif:isoSpeedRatings',
                  'exif:orientation',
                  'exif:manufacturer',
                  'exif:model',
                  'exif:software'
                ]
              }
            ]
          },
          {
            title: 'APP.CONTENT_METADATA.EFFECTIVITY_GROUP_TITLE',
            items: [
              {
                aspect: 'cm:effectivity',
                properties: ['cm:from', 'cm:to']
              }
            ]
          }
        ]
      },
      'multi-value-pipe-separator': ', ',
      'multi-value-chips': this.allowMultiValueChips,
    };
    
  }
  ngOnInit(): void {
    this.appConfig.config['content-metadata'] = {
      ...this.appConfig.config['content-metadata'],
      'multi-value-chips': this.allowMultiValueChips,
      'multi-value-pipe-separator': this.customSeparatorForMultiValueProperties,
      'copy-to-clipboard-action': this.allowCopyingToClipboardAction,
    }

  }
}
