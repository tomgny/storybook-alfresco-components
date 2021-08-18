import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-format-space',
  templateUrl: './format-space.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class FormatSpaceComponent {
  @Input()
  textToFormat: string;

  @Input()
  replaceChar: string = '_';

  @Input()
  lowercase: boolean = true;

  constructor() {}
}
