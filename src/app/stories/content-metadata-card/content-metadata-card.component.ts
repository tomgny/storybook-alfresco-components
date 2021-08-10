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
  allowMultiValueChips: boolean;

  @Input()
  customSeparatorForMultiValueProperties: string;

  @Input()
  areExifPropertiesEditable: boolean;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void {
    this.appConfig.config['content-metadata'] = {
      presets: {
        default: "*",
        allProperties: {
          includeAll: true,
        },
        exifExcludedFromAllProperties: {
          includeAll: true,
          exclude: "exif:exif",
        },
        somePropertiesFromExifIncludedWhileExifIsExcluded: {
          includeAll: true,
          exclude: "exif:exif",
          "exif:exif": [ "exif:pixelXDimension", "exif:pixelYDimension" ]
        },
        pixelDimensionPropertiesInReadOnlyMode: {
          includeAll: true,
          readOnlyProperties: [ "exif:pixelXDimension", "exif:pixelYDimension" ]
        },
        exifInReadOnlyMode: {
          includeAll: true,
          readOnlyAspects: [ "exif:exif" ],
        },
        exifAspectWhitelistedOnly: {
          "exif:exif": "*",
        },
        pixelDimensionsPropertiesFromExifWhitelistedOnly: {
          "exif:exif": [ "exif:pixelXDimension", "exif:pixelYDimension" ]
        },
        customGroupOfCherryPickedProperties: [
          {
            title: 'Custom group',
            items: [
              { "aspect": "custom:custom", "properties": "*" },
              { "aspect": "exif:exif", "properties": [ "exif:pixelXDimension", "exif:pixelYDimension" ], "editable": this.areExifPropertiesEditable },
            ]
          }
        ],
        multipleCustomGroupsOfCherryPickedProperties: [
          {
            title: 'Custom group 1',
            items: [
              { "aspect": "custom:custom", "properties": "*" },
              { "aspect": "exif:exif", "properties": [ "exif:pixelXDimension", "exif:pixelYDimension" ] },
            ]
          },
          {
            title: 'Custom group 2',
            items: [
              { "aspect": "exif:exif", "properties": "*" },
            ]
          }
        ],
        propertyCustomTitle: [
          {
          title: "Custom group",
          items: [
              { "aspect": "exif:exif", "properties": [ "exif:pixelXDimension", { name: "exif:pixelYDimension", title: "Custom Pixel Y Dimension Title" } ] }
            ]
          }
        ],
      },
      'multi-value-chips': this.allowMultiValueChips,
      'multi-value-pipe-separator': this.customSeparatorForMultiValueProperties,
    };
  }
}
