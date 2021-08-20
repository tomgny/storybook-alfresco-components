import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  /**
   * The array that contains the information to show inside the list.
   */
  @Input()
  forms: any[] = [];
}
