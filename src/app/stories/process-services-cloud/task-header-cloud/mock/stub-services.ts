import { AppConfigService } from '@alfresco/adf-core';
import { DEFAULT_TASK_PRIORITIES, TaskDetailsCloudModel, TaskPriorityOption } from '@alfresco/adf-process-services-cloud';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { tasksDetailsContainer } from './fake-task-response.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskCloudServiceStub {
  dataChangesDetected$ = new Subject();
  TASK_ASSIGNED_STATE = 'ASSIGNED';

  getTaskById(appName: string, _taskId: string): Observable<TaskDetailsCloudModel> {
    return of(tasksDetailsContainer[appName]);
  }

  getCandidateUsers(_appName: string, _taskId: string): Observable<string[]> {
    return of(['user1', 'user2']);
  }

  getCandidateGroups(_appName: string, _taskId: string): Observable<string[]> {
    return of(['group1', 'group2']);
  }

  getPriorityLabel(priority: number): string {
    const priorityItem = this.priorities.find((item) => item.value === priority.toString()) || this.priorities[0];
    return this.translateService.instant(priorityItem.label);
  }

  get priorities(): TaskPriorityOption[] {
    return this.appConfigService.get('adf-cloud-priority-values') || DEFAULT_TASK_PRIORITIES;
  }

  isTaskEditable(taskDetails: TaskDetailsCloudModel) {
    return taskDetails.status === this.TASK_ASSIGNED_STATE;
  }

  isAssigneePropertyClickable = () => false;

  constructor(private appConfigService: AppConfigService, private translateService: TranslateService) {}

  updateTask(appName: string, _taskId: string, _payload: any): Observable<TaskDetailsCloudModel> {
    return of(tasksDetailsContainer[appName]);
  }
}
