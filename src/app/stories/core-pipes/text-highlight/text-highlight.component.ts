import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class TextHighlightComponent {
  @Input()
  texts: string[];

  /**
   * String to search for in the text. Any occurrences of the string will be highlighted with added HTML. Can contain spaces, in which case each separate "word" in the string will be highlighted individually.
   */
  @Input()
  wordsToHighlight: string;

  displayedColumns = ['textBeforeHighlighting', 'textAfterHighlighting'];

  constructor() {}
}
