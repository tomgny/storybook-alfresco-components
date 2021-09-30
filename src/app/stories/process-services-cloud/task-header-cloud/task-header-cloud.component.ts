import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-task-header-cloud',
  templateUrl: './task-header-cloud.component.html'
})
export class TaskHeaderCloudComponent {
  /**
   * (Required) The name of the application.
   */
  @Input()
  appName: string = '';

  /**
   * Show/Hide the task title
   */
  @Input()
  showTitle: boolean = true;

  /**
   * (Required) The id of the task.
   */
  @Input()
  taskId: string;
}
