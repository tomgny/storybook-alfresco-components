import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['../core-pipes.scss']
})
export class TextHighlightComponent {
  @Input()
  text: string;

  @Input()
  wordsToHighlight: string;

  constructor() { }
}
