import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-localized-date',
  templateUrl: './localized-date.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class LocalizedDateComponent implements OnInit {
  @Input()
  dates: Date[];

  /**
   * A locale id for the locale format rules to use.
   */
  @Input()
  locale: string = 'en-US';

  /**
   * Pre-defined options: https://angular.io/api/common/DatePipe#pre-defined-format-options Custom options: https://angular.io/api/common/DatePipe#custom-format-options
   */
  @Input()
  format: string = 'medium';

  displayedColumns = ['dateBeforeLocalization', 'dateAfterLocalization'];

  constructor(private localizationService: LocalizationService) {}

  ngOnInit(): void {
    if (this.locale !== 'en-US') this.localizationService.registerLocales();
  }
}
