import { TaskFilterCloudModel } from '@alfresco/adf-process-services-cloud';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { defaultTaskFilters, fakeTaskCloudPreferenceList } from './task-filters-cloud.mock';

export class TaskFilterCloudServiceStub {
  private defaultTaskFilters(_appName?: string): TaskFilterCloudModel[] {
    return defaultTaskFilters;
  }

  getTaskListFilters(appName?: string): Observable<TaskFilterCloudModel[]> {
    return of(this.defaultTaskFilters(appName));
  }

  getTaskFilterCounter(taskFilter: TaskFilterCloudModel): Observable<any> {
    if (taskFilter.appName || taskFilter.appName === '') {
      return this.get().pipe(map((tasks) => tasks.list.pagination.totalItems));
    } else {
      return throwError('Appname not configured');
    }
  }

  get(): Observable<any> {
    return of(fakeTaskCloudPreferenceList);
  }

  getTaskNotificationSubscription(_appName: string): Observable<any[]> {
    return of([]);
  }
}
