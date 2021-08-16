
import { NodeEntry } from '@alfresco/js-api';

import { from, Observable, ReplaySubject, Subject } from 'rxjs';

import { ContentApiStub, NodesApiStub } from './stub-apis';

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;
}

export class AlfrescoApiServiceStub {
  nodesApi = new NodesApiStub();

  nodes = this.nodesApi;

  contentApi = new ContentApiStub();

  nodeUpdated = new Subject<Node>();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  load() {}

  getInstance = () => this;
}

export class ContentServiceStub{

  apiService = new AlfrescoApiServiceStub();

  hasPermissions = () => true;

  hasAllowableOperations = () => true;

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.apiService.getInstance().nodes.getNode(nodeId, _));
  }
}

export class NodesApiServiceStub{

  nodesApi = new NodesApiStub();

  deleteNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.nodesApi.deleteNode(nodeId, _));
  }

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.nodesApi.getNode(nodeId, _));
  }

}
