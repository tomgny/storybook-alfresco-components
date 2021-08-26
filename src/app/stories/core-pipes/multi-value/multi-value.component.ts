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
  separator: string = ', ';

  dataSource: string[][];
  displayedColumns = ['wordsBeforeSeparation', 'wordsAfterSeparation'];

  constructor() {}

  ngOnInit() {
    this.dataSource = [this.words];
  }
}
