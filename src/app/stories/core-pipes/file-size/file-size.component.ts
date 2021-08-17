import { TranslationService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-file-size',
  templateUrl: './file-size.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class FileSizeComponent implements OnInit {
  @Input()
  locale: string = 'en-US';

  @Input()
  sizeInBytes: number;

  @Input()
  decimalPlacesNumber: number = 2;

  constructor(private localizationService: LocalizationService, private translationService: TranslationService) {}

  ngOnInit(): void {
    if (this.locale !== 'en-US') this.localizationService.registerLocales();
    this.translationService.use(this.locale);
  }
}
