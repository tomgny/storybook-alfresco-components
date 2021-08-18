import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-mime-type-icon',
  templateUrl: './mime-type-icon.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class MimeTypeIconComponent {
  @Input()
  icon: string;

  constructor() {}
}
