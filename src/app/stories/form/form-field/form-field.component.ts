import { FormFieldModel } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  /**
   * Contains all the necessary data needed to determine what UI Widget to use when rendering the field in the form. You would typically
   * not create this data manually but instead create the form in APS and export it to get to all the FormFieldModel definitions.
   */
  @Input()
  field: FormFieldModel
}
