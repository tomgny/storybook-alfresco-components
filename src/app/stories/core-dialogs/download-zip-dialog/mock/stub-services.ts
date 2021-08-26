import { DownloadBodyCreate, DownloadEntry } from '@alfresco/js-api';
import { ReplaySubject, Subject } from 'rxjs';
import { downloadEntry, zipNode } from './stub-data';

export class AlfrescoApiServiceStub {
  nodeUpdated = new Subject<Node>();
  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);
  alfrescoApi = new AlfrescoApiCompatibilityStub();

  load() {}
  getInstance = () => this.alfrescoApi;
}

class AlfrescoApiCompatibilityStub {
  core = new CoreStub();
  content = new ContentApiStub();

  isOauthConfiguration = () => true;
  isLoggedIn = () => true;
  isEcmConfiguration = () => true;
  isEcmLoggedIn = () => true;
}

class ContentApiStub {
  getContentUrl = (_: string, _1?: boolean, _2?: string): string => zipNode.entry.contentUrl;
}

class CoreStub {
  downloadsApi = new DownloadsApiStub();
  nodesApi = new NodesApiStub();
}

class NodesApiStub {
  getNode = (_: string, _2?: any): any => Promise.resolve(zipNode);
}

class DownloadsApiStub {
  createDownload = (_: DownloadBodyCreate, _2?: any): Promise<DownloadEntry> => Promise.resolve(downloadEntry);
  getDownload = (_: string, _2?: any): Promise<DownloadEntry> => Promise.resolve(downloadEntry);
  cancelDownload(_: string) {}
}
