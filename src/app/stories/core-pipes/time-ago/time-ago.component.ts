import { Component, Input, OnInit } from '@angular/core';

import { LocalizationService } from '../localization.service';

@Component({
  selector: 'aca-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class TimeAgoComponent implements OnInit {
  @Input()
  date: Date;

  @Input()
  locale: string = 'en-US';

  textForDate: string;

  constructor(private localizationService: LocalizationService) {}

  ngOnInit(): void {
    if (this.date) this.textForDate = this.getStringBasedOnDate(this.date);

    if (this.locale !== 'en-US') this.localizationService.registerLocales();
  }

  private getStringBasedOnDate(date: Date): string {
    return date < new Date() ? 'Last modified:' : 'Holiday:';
  }
}
