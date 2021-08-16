import { Component, Input, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeIt from '@angular/common/locales/it';
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja';
import localeNl from '@angular/common/locales/nl';
import localePt from '@angular/common/locales/pt';
import localeNb from '@angular/common/locales/nb';
import localeRu from '@angular/common/locales/ru';
import localeCh from '@angular/common/locales/zh';
import localeAr from '@angular/common/locales/ar';
import localeCs from '@angular/common/locales/cs';
import localePl from '@angular/common/locales/pl';
import localeFi from '@angular/common/locales/fi';
import localeDa from '@angular/common/locales/da';
import localeSv from '@angular/common/locales/sv';
import { DecimalNumberModel, TranslationService } from '@alfresco/adf-core';

@Component({
  selector: 'aca-core-pipes',
  templateUrl: './core-pipes.component.html',
  styleUrls: ['./core-pipes.component.scss']
})
export class CorePipesComponent implements OnInit {
  @Input()
  showTimeAgo: boolean = false;

  @Input()
  date: Date;

  @Input()
  locale: string = 'en-US';

  @Input()
  showMultiValue: boolean = false;

  @Input()
  animals: string[];

  @Input()
  customSeparator: string = ', ';

  @Input()
  showFormatSpace: boolean = false;

  @Input()
  textToFormat: string;

  @Input()
  replaceChar: string = '_';

  @Input()
  lowercase: boolean = true;

  @Input()
  showDecimalNumber: boolean = false;

  @Input()
  numberToTransform: number;

  @Input()
  minIntegerDigits: number = 1;

  @Input()
  minFractionDigits: number = 0;

  @Input()
  maxFractionDigits: number = 2;

  @Input()
  digitsInfo: DecimalNumberModel = { minIntegerDigits: 1, minFractionDigits: 0, maxFractionDigits: 2 };

  @Input()
  showFileSize: boolean = false;

  @Input()
  sizeInBytes: number;

  @Input()
  decimalPlacesNumber: number = 2;

  @Input()
  showLocalizedDate: boolean = false;

  @Input()
  format: string = 'medium';

  textForDate: string;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    if (this.date) this.textForDate = this.getStringBasedOnDate(this.date);

    if (this.locale !== 'en-US') this.registerLocales();

    this.validateAndSetDigitsInfoValues();

    if (this.showFileSize) this.translationService.use(this.locale);
  }

  private getStringBasedOnDate(date: Date): string {
    return date < new Date() ? 'Last modified:' : 'Holiday:';
  }

  private registerLocales() {
    registerLocaleData(localeFr);
    registerLocaleData(localeDe);
    registerLocaleData(localeIt);
    registerLocaleData(localeEs);
    registerLocaleData(localeJa);
    registerLocaleData(localeNl);
    registerLocaleData(localePt);
    registerLocaleData(localeNb);
    registerLocaleData(localeRu);
    registerLocaleData(localeCh);
    registerLocaleData(localeAr);
    registerLocaleData(localeCs);
    registerLocaleData(localePl);
    registerLocaleData(localeFi);
    registerLocaleData(localeDa);
    registerLocaleData(localeSv);
  }

  private validateAndSetDigitsInfoValues() {
    if (this.minIntegerDigits < 0) this.minIntegerDigits = 0;
    if (this.minFractionDigits < 0) this.minFractionDigits = 0;
    if (this.maxFractionDigits < 0) this.maxFractionDigits = 0;
    if (this.minFractionDigits > this.maxFractionDigits) this.minFractionDigits = this.maxFractionDigits;

    this.digitsInfo = {
      minIntegerDigits: this.minIntegerDigits,
      minFractionDigits: this.minFractionDigits,
      maxFractionDigits: this.maxFractionDigits
    };
  }
}
