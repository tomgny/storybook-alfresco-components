import { AppConfigService, GroupModel, UserProcessModel, ValidateDynamicTableRowEvent } from '@alfresco/adf-core';
import { MinimalNode, NodeEntry, SitePaging } from '@alfresco/js-api';
import { Injectable } from '@angular/core';
import { from, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { GroupApiStub, ModelsApiStub, NodesApiStub, SitesApiStub } from './stub-apis';

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;
}

@Injectable({
  providedIn: 'root'
})
export class AlfrescoApiServiceStub {
  nodesApi = new NodesApiStub();

  nodes = this.nodesApi;

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

  getSiteNameFromNodePath(node: MinimalNode): string {
    let siteName = '';
    if (node.path && node.path.elements) {
      const foundNode = node.path.elements.find((pathNode: MinimalNode) => pathNode.nodeType === 'st:site' && pathNode.name !== 'Sites');
      siteName = foundNode ? foundNode.name : '';
    }
    return siteName.toLocaleLowerCase();
  }
}
