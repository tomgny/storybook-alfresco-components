import { FormFieldValidator } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  /**
   * (**required**) The id of the task whose details we are asking for.
   */
  @Input()
  taskId: string;

  /**
   * Toggles rendering of the form title.
   */
  @Input()
  showFormTitle: boolean = true;

  /**
   * Toggles rendering of the `Complete` outcome button.
   */
  @Input()
  showFormCompleteButton: boolean = true;

  /**
   * Toggles rendering of the `Save` outcome button.
   */
  @Input()
  showFormSaveButton: boolean = true;

  /**
   * Toggle rendering of the `Cancel` button.
   */
  @Input()
  showCancelButton: boolean = true;

  /**
   * Toggles read-only state of the form. All form widgets render as read-only if enabled.
   */
  @Input()
  readOnlyForm: boolean = false;

  /**
   * Toggles rendering of the `Refresh` button.
   */
  @Input()
  showFormRefreshButton: boolean = true;

  /**
   * Toggle rendering of the validation icon next to the form title.
   */
  @Input()
  showFormValidationIcon: boolean = true;

  /**
   * Field validators for use with the form.
   */
  @Input()
  fieldValidators: FormFieldValidator[] = [];
}
