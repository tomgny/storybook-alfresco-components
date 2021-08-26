import { AppConfigService, FileUploadErrorEvent } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
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

  constructor(private appConfig: AppConfigService){
  }
}

export class UploadServiceStub {
  fileUploadError: Subject<FileUploadErrorEvent> = new Subject<FileUploadErrorEvent>();

  beginUpload() {}

  addToQueue() {}

  uploadFilesInTheQueue() {}
}
