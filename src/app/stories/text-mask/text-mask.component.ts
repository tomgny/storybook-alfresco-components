import { FormFieldModel, FormModel } from '@alfresco/adf-core';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'aca-text-mask',
  templateUrl: './text-mask.component.html'
})
export class TextMaskComponent implements OnChanges {

  @Input()
  inputMask: string = '';

  @Input()
  inputMaskPlaceholder: string = '';

  @Input()
  inputMaskReversed: boolean = false;

  @Input()
  inputName: string = '';

  /**
   * Contains all the necessary data needed to determine what UI Widget to use when rendering the field in the form. You would typically not create this data manually * but instead create the form in APS and export it to get to all the FormFieldModel definitions.
   */
  @Input()
  field: FormFieldModel = new FormFieldModel(new FormModel(), {
    id: 'textField',
    name: this.inputName,
    value: null,
    type: 'text',
    params: {
      inputMask: this.inputMask,
      inputMaskPlaceholder: this.inputMaskPlaceholder,
      inputMaskReversed: this.inputMaskReversed
    }
  });

  ngOnChanges() {
    this.field.params.inputMask = this.inputMask;
    this.field.params.inputMaskPlaceholder = this.inputMaskPlaceholder;
    this.field.params.inputMaskReversed = this.inputMaskReversed;
    this.field.name = this.inputName;
  }
}
