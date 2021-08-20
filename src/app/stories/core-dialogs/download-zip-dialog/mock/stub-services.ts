import { DownloadBodyCreate, DownloadEntry } from '@alfresco/js-api';
import { ReplaySubject, Subject } from 'rxjs';
import { downloadEntry, loremIpsumTextNode } from './stub-data';

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
}

class ContentApiStub {
  getContentUrl = (_: string, _1?: boolean, _2?: string): string => loremIpsumTextNode.entry.contentUrl;
}

class CoreStub {
  downloadsApi = new DownloadsApiStub();
  nodesApi = new NodesApiStub();
}

class NodesApiStub {
  getNode = (_: string, _2?: any): any => Promise.resolve(loremIpsumTextNode);
}

class DownloadsApiStub {
  createDownload = (_: DownloadBodyCreate, _2?: any): Promise<DownloadEntry> => Promise.resolve(downloadEntry);
  getDownload = (_: string, _2?: any): Promise<DownloadEntry> => Promise.resolve(downloadEntry);
  cancelDownload(_: string) {}
}
