import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-error-content',
  templateUrl: './error-content.component.html',
})
export class ErrorContentComponent {
  /**
   * Error code associated with this error.
   */
  @Input()
  errorCode: string;

  @Input()
  showActions: boolean;

  onClick() {
    alert('You would be redirected to home.')
  }
}
