import { TranslationService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-file-size',
  templateUrl: './file-size.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class FileSizeComponent implements OnInit {
  @Input()
  locale: string = 'en-US';

  @Input()
  sizeInBytes: number;

  /**
   * The number of decimal places to use for the value
   */
  @Input()
  decimalPlacesNumber: number = 2;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    if (this.locale !== 'en-US') this.translationService.use(this.locale);
  }
}
