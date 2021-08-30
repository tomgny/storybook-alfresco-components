import { AppConfigService } from '@alfresco/adf-core';
import { NodeEntry } from '@alfresco/js-api';
import { Injectable } from '@angular/core';
import { from, Observable, ReplaySubject, Subject } from 'rxjs';
import { ContentApiStub, NodesApiStub } from './stub-apis';

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

  contentApi = new ContentApiStub();

  nodeUpdated = new Subject<Node>();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  async load() {
    await this.appConfig.load();
  }

  getInstance = () => this;

  constructor(private appConfig: AppConfigService) {}
}

@Injectable({
  providedIn: 'root'
})
export class ContentServiceStub {
  apiService = new AlfrescoApiServiceStub(this.appConfig);

  hasPermissions = () => true;

  hasAllowableOperations = () => true;

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.apiService.getInstance().nodes.getNode(nodeId, _));
  }

  constructor(private appConfig: AppConfigService) {}
}

@Injectable({
  providedIn: 'root'
})
export class ContentServiceNoPermissionsStub {
  apiService = new AlfrescoApiServiceStub(this.appConfig);

  hasPermissions = () => false;

  hasAllowableOperations = () => false;

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.apiService.getInstance().nodes.getNode(nodeId, _));
  }

  constructor(private appConfig: AppConfigService) {}
}

export class NodesApiServiceStub {
  nodesApi = new NodesApiStub();

  deleteNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.nodesApi.deleteNode(nodeId, _));
  }

  getNode(nodeId: string, _?: any): Observable<NodeEntry> {
    return from(this.nodesApi.getNode(nodeId, _));
  }
}
