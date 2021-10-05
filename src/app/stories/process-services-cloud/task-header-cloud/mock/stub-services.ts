import { AppConfigService, FormValues } from '@alfresco/adf-core';
import {
  DEFAULT_TASK_PRIORITIES,
  FormContent,
  TaskDetailsCloudModel,
  TaskPriorityOption,
  TaskVariableCloud
} from '@alfresco/adf-process-services-cloud';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { formDisplayValueVisibility, tasksDetailsContainer } from './fake-task-response.mock';

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

  canCompleteTask = () => true;

  canClaimTask = () => true;
}

export class FormCloudServiceStub {
  getTaskForm(appName: string, taskId: string, version?: number): Observable<any> {
    return this.getTask(appName, taskId).pipe(
      switchMap((task) => {
        return this.getForm(appName, task.formKey, version).pipe(
          map((form: FormContent) => {
            const flattenForm = {
              ...form.formRepresentation,
              ...form.formRepresentation.formDefinition,
              taskId: task.id,
              taskName: task.name,
              processDefinitionId: task.processDefinitionId,
              processInstanceId: task.processInstanceId
            };
            delete flattenForm.formDefinition;
            return flattenForm;
          })
        );
      })
    );
  }

  getTask(appName: string, _taskId: string): Observable<TaskDetailsCloudModel> {
    return of(tasksDetailsContainer[appName]);
  }

  getForm(_appName: string, _formKey: string, _version?: number): Observable<FormContent> {
    return of(formDisplayValueVisibility);
  }

  getTaskVariables(_appName: string, _taskId: string): Observable<TaskVariableCloud[]> {
    return of([new TaskVariableCloud({ name: 'name1', value: 5, type: 'text', id: '52' })]);
  }

  saveTaskForm(
    appName: string,
    _taskId: string,
    _processInstanceId: string,
    _formId: string,
    _values: FormValues
  ): Observable<TaskDetailsCloudModel> {
    return of(tasksDetailsContainer[appName]);
  }

  completeTaskForm(
    appName: string,
    _taskId: string,
    _processInstanceId: string,
    _formId: string,
    _formValues: FormValues,
    _outcome: string,
    _version: number
  ): Observable<TaskDetailsCloudModel> {
    return of(tasksDetailsContainer[appName]);
  }
}
