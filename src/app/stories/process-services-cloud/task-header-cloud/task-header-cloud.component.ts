import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-task-header-cloud',
  templateUrl: './task-header-cloud.component.html',
  styleUrls: ['./task-header-cloud.component.scss']
})
export class TaskHeaderCloudComponent {

  @Input()
  appName: string = '';

  @Input()
  showTitle: boolean = true;

  @Input()
  taskId: string;

}
