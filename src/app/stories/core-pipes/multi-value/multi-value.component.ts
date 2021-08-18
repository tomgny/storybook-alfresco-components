import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-multi-value',
  templateUrl: './multi-value.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class MultiValueComponent {
  @Input()
  words: string[];

  @Input()
  customSeparator: string = ', ';

  constructor() {}
}
