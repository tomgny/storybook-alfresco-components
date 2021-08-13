import { AppConfigService, TranslationService } from '@alfresco/adf-core';
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

  @Input()
  selectFilterLimit: number;

  constructor(private appConfig: AppConfigService, private translateService: TranslationService) {}

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
      'selectFilterLimit': this.selectFilterLimit
    };

    this.appConfig.config['locale'] = 'en'

    this.appConfig.config["languages"]= [
      {
        "key": "de",
        "label": "Deutsch"
      },
      {
        "key": "en",
        "label": "English"
      },
      {
        "key": "es",
        "label": "Español"
      },
      {
        "key": "fr",
        "label": "Français"
      },
      {
        "key": "it",
        "label": "Italiano"
      },
      {
        "key": "ja",
        "label": "日本語"
      },
      {
        "key": "nb",
        "label": "Bokmål"
      },
      {
        "key": "nl",
        "label": "Nederlands"
      },
      {
        "key": "pt-BR",
        "label": "Português (Brasil)"
      },
      {
        "key": "ru",
        "label": "Русский"
      },
      {
        "key": "zh-CN",
        "label": "中文简体"
      },
      {
        "key": "cs",
        "label": "Čeština"
      },
      {
        "key": "da",
        "label": "Dansk"
      },
      {
        "key": "fi",
        "label": "Suomi"
      },
      {
        "key": "pl",
        "label": "Polski"
      },
      {
        "key": "sv",
        "label": "Svenska"
      },
      {
        "key": "ar",
        "label": "العربية",
        "direction": "rtl"
      }
    ],
    
    // this.translateService.loadTranslation('en.json')
    this.translateService.loadTranslation('en')
    this.translateService.use('en');

    console.log(this.translateService.instant('ADF-ASPECT-LIST.PROPERTY_NAME'));
    

    this.translateService.get('ADF-ASPECT-LIST.PROPERTY_NAME').subscribe(translation => {
      console.log(translation);
    });
    
  }

 
}
