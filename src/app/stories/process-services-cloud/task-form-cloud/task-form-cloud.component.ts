import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-task-form-cloud',
  templateUrl: './task-form-cloud.component.html'
})
export class TaskFormCloudComponent {
  /**
   * App id to fetch corresponding form and values.
   */
  @Input()
  appName: string = '';

  /**
   * Toggle readonly state of the task.
   */
  @Input()
  readOnly: boolean = false;

  /**
   * Toggle rendering of the Cancel button.
   */
  @Input()
  showCancelButton: boolean = true;

  /**
   * Toggle rendering of the Complete button.
   */
  @Input()
  showCompleteButton: boolean = true;

  /**
   * Toggle rendering of the Refresh button.
   */
  @Input()
  showRefreshButton: boolean = false;

  /**
   * Toggle rendering of the form title.
   */
  @Input()
  showTitle: boolean = true;

  /**
   * Toggle rendering of the Validation icon.
   */
  @Input()
  showValidationIcon: boolean = true;

  /**
   * Task id to fetch corresponding form and values.
   */
  @Input()
  taskId: string;

  onFormCompleted(event) {
    window.alert(`${event.taskName} completed!`);
  }

  onFormSaved(event) {
    window.alert(`${event.taskName} saved!`);
  }

  onCancel() {
    window.alert('Cancel clicked!');
  }
}
