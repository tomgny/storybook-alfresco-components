import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent {
  @Input()
  tooltip: string;

  @Input()
  notification: string;

  @Input()
  spanText: string;

  @Input()
  buttonText: string;

  public buttonCopyingInputValueText: string = 'You can copy value of other HTMLelement. Try it';

  public textAreaPlaceHolder: string = 'Paste here to check if Clipboard Directive works!';

  constructor() {}
}
