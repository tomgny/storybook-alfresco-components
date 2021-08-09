import { FileUploadErrorEvent } from '@alfresco/adf-core';
import { ReplaySubject, Subject } from 'rxjs';
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

export class UploadServiceStub{

  fileUploadError: Subject<FileUploadErrorEvent> = new Subject<FileUploadErrorEvent>();

  beginUpload = () => null;

  addToQueue = () => null;

  uploadFilesInTheQueue = () => null;
}
