import { DecimalNumberModel } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-decimal-number',
  templateUrl: './decimal-number.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class DecimalNumberComponent implements OnInit {
  @Input()
  locale: string = 'en-US';

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

  constructor(private localizationService: LocalizationService) {}

  ngOnInit(): void {
    if (this.locale !== 'en-US') this.localizationService.registerLocales();

    this.validateAndSetDigitsInfoValues();
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
