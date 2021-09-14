import {
  AppConfigService,
  ContentLinkModel,
  FormEvent,
  GroupModel,
  IdentityGroupModel,
  IdentityGroupSearchParam,
  IdentityUserModel,
  UserProcessModel,
  ValidateDynamicTableRowEvent
} from '@alfresco/adf-core';
import { TaskDetailsModel } from '@alfresco/adf-process-services';
import { MinimalNode, NodeEntry, SitePaging, UserRepresentation } from '@alfresco/js-api';
import { Injectable } from '@angular/core';
import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { standaloneTaskWithForm } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { fakeBpmUser, mockIdentityGroups, mockIdentityUsers } from './fake-users-groups';
import {
  AuthenticationApiStub,
  ContentApiStub,
  GroupApiStub,
  ModelsApiStub,
  NodesApiStub,
  ProcessApiStub,
  SitesApiStub,
  TaskApiStub,
  TaskFormsApiStub
} from './stub-apis';

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

  activiti = { taskApi: new TaskApiStub(), taskFormsApi: new TaskFormsApiStub(), contentApi: new ContentApiStub(), processApi: new ProcessApiStub() };

  nodeUpdated = new Subject<Node>();

  modelsApi = new ModelsApiStub();

  contentApi = new ContentApiStub();

  content = new ContentApiStub();

  authenticationApi = new AuthenticationApiStub();

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

  taskSaved = new Subject<FormEvent>();

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

  getRestFieldValues(_taskId: string, _fieldId: string): Observable<any> {
    return of([
      { id: '1', name: 'Leanne Graham' },
      { id: '2', name: 'Ervin Howell' },
      { id: '3', name: 'Clementine Bauch' },
      { id: '4', name: 'Patricia Lebsack' },
      { id: '5', name: 'Chelsey Dietrich' },
      { id: '6', name: 'Mrs. Dennis Schulist' },
      { id: '7', name: 'Kurtis Weissnat' },
      { id: '8', name: 'Nicholas Runolfsdottir V' },
      { id: '9', name: 'Glenna Reichert' },
      { id: '10', name: 'Clementina DuBuque' }
    ]);
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

  isCustomSource() {
    return true;
  }
}

export class IdentityUserServiceStub {
  findUsersByName(search: string): Observable<IdentityUserModel[]> {
    if (search === '') {
      return of([]);
    }

    return of(mockIdentityUsers);
  }

  getClientIdByApplicationName(_applicationName: string): Observable<string> {
    return from('fakeUser');
  }
}

export class IdentityGroupServiceStub {
  findGroupsByName(searchParams: IdentityGroupSearchParam): Observable<IdentityGroupModel[]> {
    if (searchParams.name === '') {
      return of([]);
    }

    return of(mockIdentityGroups);
  }

  getClientIdByApplicationName(_applicationName: string): Observable<string> {
    return from('fakeUser');
  }
}
