import { DecimalNumberModel } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-decimal-number',
  templateUrl: './decimal-number.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class DecimalNumberComponent implements OnInit {
  /**
   * A locale id for the locale format rules to use.
   */
  @Input()
  locale: string = 'en-US';

  @Input()
  numbersToTransform: number[];

  /**
   * https://github.com/Alfresco/alfresco-ng2-components/blob/develop/lib/core/models/decimal-number.model.ts
   */
  @Input()
  minIntegerDigits: number = 1;

  /**
   * https://github.com/Alfresco/alfresco-ng2-components/blob/develop/lib/core/models/decimal-number.model.ts
   */
  @Input()
  minFractionDigits: number = 0;

  /**
   * https://github.com/Alfresco/alfresco-ng2-components/blob/develop/lib/core/models/decimal-number.model.ts
   */
  @Input()
  maxFractionDigits: number = 2;

  /**
   * Configuration object that deterimnes how number will be transformed.
   */
  @Input()
  digitsInfo: DecimalNumberModel = { minIntegerDigits: 1, minFractionDigits: 0, maxFractionDigits: 2 };

  displayedColumns = ['number', 'numberFormatted'];

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
