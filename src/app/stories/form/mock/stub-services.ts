import { AppConfigService, BpmUserModel, ContentLinkModel, FormEvent, GroupModel, IdentityGroupModel, IdentityGroupSearchParam, IdentityUserModel, UserProcessModel, ValidateDynamicTableRowEvent } from '@alfresco/adf-core';
import { TaskDetailsModel } from '@alfresco/adf-process-services';
import { MinimalNode, NodeEntry, SitePaging, UserRepresentation } from '@alfresco/js-api';
import { Injectable } from '@angular/core';
import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { standaloneTaskWithForm } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { AlfrescoApiActivitiStub, AuthenticationApiStub, ContentApiStub, GroupApiStub, ModelsApiStub, NodesApiStub, ProcessApiStub, SitesApiStub, TaskApiStub, TaskFormsApiStub } from './stub-apis';

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

  getInstance = () => this

  constructor(private appConfig: AppConfigService) {}
}

@Injectable({
  providedIn: 'root'
})
export class AlfrescoApiCompatibilityServiceStub {///test

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  alfrescoApi = {
    activiti: {
      alfrescoApi: new AlfrescoApiActivitiStub()
    }
  }

  async load() {
    await this.appConfig.load();
  }

  getInstance = () => this.alfrescoApi

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

  getRestFieldValues(
    _taskId: string,
    _fieldId: string
): Observable<any> {
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

  isCustomSource(){
    return true;
  }
}

export const mockIdentityUser1: IdentityUserModel = { id: 'mock-user-id-1', username: 'userName1', firstName: 'first-name-1', lastName: 'last-name-1', email: 'abc@xyz.com' };
export const mockIdentityUser2: IdentityUserModel = { id: 'mock-user-id-2', username: 'userName2', firstName: 'first-name-2', lastName: 'last-name-2', email: 'abcd@xyz.com'};
export const mockIdentityUser3: IdentityUserModel = { id: 'mock-user-id-3', username: 'userName3', firstName: 'first-name-3', lastName: 'last-name-3', email: 'abcde@xyz.com' };
export const mockIdentityUser4: IdentityUserModel = { id: 'mock-user-id-4', username: 'userName4', firstName: 'first-name-4', lastName: 'last-name-4', email: 'abcde@xyz.com' };
export let  mockIdentityUser5: IdentityUserModel = { id: 'mock-user-id-5', username: 'userName5', firstName: 'first-name-5', lastName: 'last-name-5', email: 'abcde@xyz.com' };

export const mockIdentityUsers: IdentityUserModel[] = [
    mockIdentityUser1,
    mockIdentityUser2,
    mockIdentityUser3,
    mockIdentityUser4,
    mockIdentityUser5
];

export class IdentityUserServiceStub {
  findUsersByName(search: string): Observable<IdentityUserModel[]> {
    if(search === ''){
      return of([]);
    }

    return of(mockIdentityUsers)
  }

  getClientIdByApplicationName(_applicationName: string): Observable<string> {
    return from('fakeUser')
  }
  //getCurrentUserInfo = (): IdentityUserModel => this.fakeIdentityUser;
}

export const mockIdentityGroup1 = <IdentityGroupModel> {
  id: 'mock-group-id-1', name: 'Mock Group 1', path: '/mock', subGroups: []
};

export const mockIdentityGroup2 = <IdentityGroupModel> {
  id: 'mock-group-id-2', name: 'Mock Group 2', path: '', subGroups: []
};

export const mockIdentityGroup3 = <IdentityGroupModel> {
id: 'mock-group-id-3', name: 'Mock Group 3', path: '', subGroups: []
};

export const mockIdentityGroup4 = <IdentityGroupModel> {
  id: 'mock-group-id-4', name: 'Mock Group 4', path: '', subGroups: []
};

export const mockIdentityGroup5 = <IdentityGroupModel> {
  id: 'mock-group-id-5', name: 'Mock Group 5', path: '', subGroups: []
};

export const mockIdentityGroups = [
  mockIdentityGroup1, mockIdentityGroup2, mockIdentityGroup3, mockIdentityGroup4, mockIdentityGroup5
];

export class IdentityGroupServiceStub {
  findGroupsByName(searchParams: IdentityGroupSearchParam): Observable<IdentityGroupModel[]> {
    if (searchParams.name === '') {
        return of([]);
    }

    return of(mockIdentityGroups);
}

  getClientIdByApplicationName(_applicationName: string): Observable<string> {
    return from('fakeUser')
  }
  //getCurrentUserInfo = (): IdentityUserModel => this.fakeIdentityUser;
}

// export class ProcessCloudContentServiceStub {

//   constructor(private contentService: ContentService, private downloadService: DownloadService){
//   }

//   async downloadFile(nodeId: string) {

//     const ticket = await this.getAuthTicket();
//     const url = this.contentService.getContentUrl(nodeId, true, ticket);

//     this.downloadService.downloadUrl(url, nodeId);
//   }

//   getAuthTicket(): Promise<string> {
//     return Promise.resolve('ticket')
//   }
// }



// export class ProcessContentServiceStub {

//   contentApi = new ContentApiStub()

//   getFileContent(_contentId: number): Observable<RelatedContentRepresentation> {
//     return of(fakePngAnswer)
//   }

//   getFileRawContentUrl(contentId: number): string {
//     return this.contentApi.getRawContentUrl(contentId)
// }

// getFileRawContent(contentId: number): Observable<Blob>{
//     return from(this.contentApi.getRawContent(contentId));
//   }

//   getContentPreview(contentId: number): Observable<Blob> {
//     return from(this.contentApi.getContentPreview(contentId))
//   }
// }
