import { AppConfigService, BpmUserModel, ContentLinkModel, GroupModel, UserProcessModel, ValidateDynamicTableRowEvent } from '@alfresco/adf-core';
import { TaskDetailsModel } from '@alfresco/adf-process-services';
import { MinimalNode, NodeEntry, SitePaging, UserRepresentation } from '@alfresco/js-api';
import { Injectable } from '@angular/core';
import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { standaloneTaskWithForm } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { GroupApiStub, ModelsApiStub, NodesApiStub, SitesApiStub, TaskApiStub, TaskFormsApiStub } from './stub-apis';

const fakeBpmUser = new BpmUserModel({
  apps: [],
  capabilities: null,
  company: 'fake-company',
  created: 'fake-create-date',
  email: 'fakeBpm@fake.com',
  externalId: 'fake-external-id',
  firstName: 'fake-bpm-first-name',
  lastName: 'fake-bpm-last-name',
  groups: [],
  id: 'fake-id',
  lastUpdate: 'fake-update-date',
  latestSyncTimeStamp: 'fake-timestamp',
  password: 'fake-password',
  pictureId: 12,
  status: 'fake-status',
  tenantId: 'fake-tenant-id',
  tenantName: 'fake-tenant-name',
  tenantPictureId: 'fake-tenant-picture-id',
  type: 'fake-type'
});

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;

  getBpmLoggedUser(): Observable<UserRepresentation> {
    return of(fakeBpmUser);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AlfrescoApiServiceStub {
  nodesApi = new NodesApiStub();

  nodes = this.nodesApi;

  taskApi = new TaskApiStub();

  activiti = { taskApi: new TaskApiStub(), taskFormsApi: new TaskFormsApiStub() };

  nodeUpdated = new Subject<Node>();

  modelsApi = new ModelsApiStub();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  async load() {
    await this.appConfig.load();
  }

  getInstance = () => this;

  constructor(private appConfig: AppConfigService) {}
}

export class FormServiceStub {
  modelsApi = new ModelsApiStub();

  groupsApi = new GroupApiStub();

  formEvents = new Subject<Event>();

  validateDynamicTableRow = new Subject<ValidateDynamicTableRowEvent>();

  formContentClicked = new Subject<ContentLinkModel>();

  getForms(): Observable<any> {
    return of([]);
  }

  getWorkflowGroups(filter: string, _groupId?: string): Observable<GroupModel[]> {
    return of(
      [
        { externalId: 'users', groups: 'groups', id: 'users', name: 'Users', status: 'users' },
        { externalId: 'admins', groups: 'groups', id: 'admins', name: 'Admins', status: 'admins' },
        { externalId: 'super admins', groups: 'super groups', id: 'super admins', name: 'Super Admins', status: 'super admins' }
      ].filter((group) => group.name.toLowerCase().startsWith(filter.toLowerCase()))
    );
  }

  getWorkflowUsers(filter: string, _groupId?: string): Observable<UserProcessModel[]> {
    return of(
      [
        new UserProcessModel({ id: 1, firstName: 'Leanne', lastName: 'Graham' }),
        new UserProcessModel({ id: 2, firstName: 'Ervin', lastName: 'Howell' }),
        new UserProcessModel({ id: 3, firstName: 'Clementine', lastName: 'Bauch' }),
        new UserProcessModel({ id: 4, firstName: 'Patricia', lastName: 'Lebsack' }),
        new UserProcessModel({ id: 5, firstName: 'Chelsey', lastName: 'Dietrich' }),
        new UserProcessModel({ id: 6, firstName: 'Dennis', lastName: 'Schulist' }),
        new UserProcessModel({ id: 7, firstName: 'Kurtis', lastName: 'Weissnat' }),
        new UserProcessModel({ id: 8, firstName: 'Nicholas', lastName: 'Runolfsdottir' }),
        new UserProcessModel({ id: 9, firstName: 'Glenna', lastName: 'Reichert' }),
        new UserProcessModel({ id: 10, firstName: 'Clementina', lastName: 'DuBuque' })
      ].filter((user) => user.firstName.toLowerCase().startsWith(filter) || user.lastName.toLowerCase().startsWith(filter))
    );
  }
}

export class NodesApiServiceStub {
  nodesApi = new NodesApiStub();

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.nodesApi.getNode(nodeId, _));
  }
}

export class SitesServiceStub {
  sitesApi = new SitesApiStub();

  getSites(_opts: any = {}): Observable<SitePaging> {
    return from(this.sitesApi.listSites({ visibility: 'public' }));
  }

  getSiteNameFromNodePath(_node: MinimalNode): string {
    return '';
  }
}

export class TaskListServiceStub {
  getTaskDetails(_taskId: string): Observable<TaskDetailsModel> {
    return of(standaloneTaskWithForm);
  }
}

export class CustomResourcesServiceStub {
  nodesApi = new NodesApiStub();

  isCustomSource(){
    return true;
  }
}
