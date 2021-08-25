import { GroupModel } from '@alfresco/adf-core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { GroupApiStub, ModelsApiStub } from './stub-apis';

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;
}

export class AlfrescoApiServiceStub {
  nodeUpdated = new Subject<Node>();

  modelsApi = new ModelsApiStub();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  load() {}

  getInstance = () => this;
}

export class FormServiceStub {
  getForms(): Observable<any> {
    return of([]);
  }

  modelsApi = new ModelsApiStub();

  groupsApi = new GroupApiStub();

  formEvents = new Subject<Event>();

  getWorkflowGroups(filter: string, _groupId?: string): Observable<GroupModel[]> {
    return of(
      [
        { externalId: 'users', groups: 'groups', id: 'users', name: 'Users', status: 'users' },
        { externalId: 'admins', groups: 'groups', id: 'admins', name: 'Admins', status: 'admins' },
        { externalId: 'super admins', groups: 'super groups', id: 'super admins', name: 'Super Admins', status: 'super admins' }
      ].filter((group) => group.name.toLowerCase().startsWith(filter.toLowerCase()))
    );
  }
}
