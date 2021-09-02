import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-format-space',
  templateUrl: './format-space.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class FormatSpaceComponent {
  @Input()
  textsToFormat: string[];

  @Input()
  replaceChar: string = '_';

  /**
   * If set to false the conversion to lowercase is skipped.
   */
  @Input()
  lowercase: boolean = true;

  displayedColumns = ['textBeforeFormatting', 'textAfterFormatting'];
}
