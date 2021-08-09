import { NodeChildAssociationPaging, NodeEntry } from '@alfresco/js-api';
import { mimeTypeIcons, mockNodePaging, nodeIdToObjectTranslating } from './fake-nodes';

export class ContentApiStub {

  getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
    return nodeIdToObjectTranslating[nodeId].entry.contentUrl;
  }

  getDocumentThumbnailUrl(nodeId: string, _?: boolean, _2?: string): string{
    const mimeTypeIcon =  nodeIdToObjectTranslating[nodeId].content.mimeType;
    return mimeTypeIcons[mimeTypeIcon];
  }
}

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }

  getNodeChildren(_: string, _2?: any): Promise<NodeChildAssociationPaging> {
    return Promise.resolve(mockNodePaging);
  }
}
