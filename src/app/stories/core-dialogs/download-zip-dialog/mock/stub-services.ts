import { DownloadBodyCreate, DownloadEntry } from '@alfresco/js-api';
import { ReplaySubject, Subject } from 'rxjs';
import { loremIpsumTextNode } from './stub-data';

export class AlfrescoApiServiceStub {
  nodeUpdated = new Subject<Node>();
  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);
  load() {}

  getInstance() {
    return this.alfrescoApi;
  }
  protected alfrescoApi = new AlfrescoApiCompatibilityStub();
}

class AlfrescoApiCompatibilityStub {
  core = new CoreStub();
  content = new ContentApiStub();
}

class ContentApiStub {
  getContentUrl(_: string, _1?: boolean, _2?: string): string {
    return loremIpsumTextNode.entry.contentUrl;
  }
}

class CoreStub {
  downloadsApi = new DownloadsApiStub();
  nodesApi = new NodesApiStub();
}

class NodesApiStub {
  getNode(_: string, _2?: any): any {
    return Promise.resolve(loremIpsumTextNode);
  }
}

class DownloadsApiStub {
  createDownload(_: DownloadBodyCreate, _2?: any): Promise<DownloadEntry> {
    return Promise.resolve(downloadEntry);
  }
  getDownload(_: string, _2?: any): Promise<DownloadEntry> {
    return Promise.resolve(downloadEntry);
  }

  cancelDownload(_: string) {}
}

export const downloadEntry: DownloadEntry = {
  entry: {
    id: 'entryId',
    status: 'DONE'
  }
};
