import { Component, Input, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-localized-date',
  templateUrl: './localized-date.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class LocalizedDateComponent implements OnInit {
  @Input()
  date: Date;

  @Input()
  locale: string = 'en-US';

  @Input()
  format: string = 'medium';

  constructor(private localizationService: LocalizationService) { }

  ngOnInit(): void {
    if (this.locale !== 'en-US') this.localizationService.registerLocales();

  }

}
