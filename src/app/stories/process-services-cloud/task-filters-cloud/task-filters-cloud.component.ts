import { FilterParamsModel } from '@alfresco/adf-process-services-cloud';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-task-filters-cloud',
  templateUrl: './task-filters-cloud.component.html',
  styleUrls: ['./task-filters-cloud.component.scss']
})
export class TaskFiltersCloudComponent {
  /**
   * Display filters available to the current user for the application with the specified name.
   */
  @Input()
  appName: string = '';

  /**
   * Parameters to use for the task filter cloud. If there is no match then the default filter (the first one in the list) is selected.
   */
  @Input()
  filterParam: FilterParamsModel;

  /**
   * Toggles display of the filter's icons.
   */
  @Input()
  showIcons: boolean = false;
}
