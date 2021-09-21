import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-form-list',
  templateUrl: './form-list.component.html'
})
export class FormListComponent {
  /**
   * The array that contains the information to show inside the list.
   */
  @Input()
  forms: any[] = [];
}
