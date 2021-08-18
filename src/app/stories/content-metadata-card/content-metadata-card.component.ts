import { AppConfigService } from '@alfresco/adf-core';
import { Node } from '@alfresco/js-api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-content-metadata-card',
  templateUrl: './content-metadata-card.component.html',
})
export class ContentMetadataCardComponent implements OnInit {
  
  /**  
  * (required) The node entity to fetch metadata about
  */
  @Input()
  node: Node;

  /**  
  * (required) Name of the metadata preset, which defines aspects and their properties.
  */
  @Input()
  preset: string;

  /**  
  * (optional) This flag displays desired aspect when open for the first time fields.
  */
  @Input()
  displayAspect: string;

  /**  
  * (optional) This flag displays/hides empty metadata fields.
  */
  @Input()
  displayEmpty: boolean;

  /**  
  * (optional) This flag allows the component to display more than one accordion at a time.
  */
  @Input()
  multi: boolean;

  /**  
  * (optional) This flag sets the metadata in read only mode preventing changes.
  */
  @Input()
  readOnly: boolean;

  /**  
  * (optional) This flag displays/hides the metadata properties.
  */
  @Input()
  displayDefaultProperties: boolean;

  @Input()
  allowMultiValueChips: boolean;

  @Input()
  customSeparatorForMultiValueProperties: string;

  @Input()
  areExifPropertiesEditable: boolean;

  @Input()
  selectFilterLimit: number;

  constructor(private appConfig: AppConfigService) {}

  ngOnInit(): void {
    this.appConfig.config['content-metadata'] = {
      presets: {
        default: '*',
        allProperties: {
          includeAll: true
        },
        exifExcludedFromAllProperties: {
          includeAll: true,
          exclude: 'exif:exif'
        },
        somePropertiesFromExifIncludedWhileExifIsExcluded: {
          includeAll: true,
          exclude: 'exif:exif',
          'exif:exif': ['exif:pixelXDimension', 'exif:pixelYDimension']
        },
        pixelDimensionPropertiesInReadOnlyMode: {
          includeAll: true,
          readOnlyProperties: ['exif:pixelXDimension', 'exif:pixelYDimension']
        },
        exifInReadOnlyMode: {
          includeAll: true,
          readOnlyAspects: ['exif:exif']
        },
        exifAspectWhitelistedOnly: {
          'exif:exif': '*'
        },
        pixelDimensionsPropertiesFromExifWhitelistedOnly: {
          'exif:exif': ['exif:pixelXDimension', 'exif:pixelYDimension']
        },
        customGroupOfCherryPickedProperties: [
          {
            title: 'Custom group',
            items: [
              { aspect: 'custom:custom', properties: '*' },
              { aspect: 'exif:exif', properties: ['exif:pixelXDimension', 'exif:pixelYDimension'], editable: this.areExifPropertiesEditable }
            ]
          }
        ],
        multipleCustomGroupsOfCherryPickedProperties: [
          {
            title: 'Custom group 1',
            items: [
              { aspect: 'custom:custom', properties: '*' },
              { aspect: 'exif:exif', properties: ['exif:pixelXDimension', 'exif:pixelYDimension'] }
            ]
          },
          {
            title: 'Custom group 2',
            items: [{ aspect: 'exif:exif', properties: '*' }]
          }
        ],
        propertyCustomTitle: [
          {
            title: 'Custom group',
            items: [
              { aspect: 'exif:exif', properties: ['exif:pixelXDimension', { name: 'exif:pixelYDimension', title: 'Custom Pixel Y Dimension Title' }] }
            ]
          }
        ],
        propertiesWithListValueSelection: [
          {
            title: 'Properties with drop-down menu value selection',
            items: [
              { aspect: 'exif:exif', properties: ['exif:isoSpeedRatings', 'exif:exposureTime'] },
              { aspect: 'custom:custom', properties: 'custom:source' }
            ]
          }
        ]
      },
      'multi-value-chips': this.allowMultiValueChips,
      'multi-value-pipe-separator': this.customSeparatorForMultiValueProperties,
      selectFilterLimit: this.selectFilterLimit
    };
  }
}
