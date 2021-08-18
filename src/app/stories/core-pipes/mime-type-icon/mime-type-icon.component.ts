import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-mime-type-icon',
  templateUrl: './mime-type-icon.component.html'
})
export class MimeTypeIconComponent {
  /**
   * https://github.com/Alfresco/alfresco-ng2-components/blob/develop/docs/core/services/thumbnail.service.md#details
   */
  @Input()
  icon: string;

  constructor() {}
}
