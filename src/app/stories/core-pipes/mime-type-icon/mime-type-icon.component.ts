import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-mime-type-icon',
  templateUrl: './mime-type-icon.component.html'
})
export class MimeTypeIconComponent {
  /**
   * https://alfresco.zoom.us/j/96852672189?pwd=VzFodG8vTVY2NU1KbnJ1Q3pJNFg5QT09&from=addon
   */
  @Input()
  icon: string;

  constructor() {}
}
