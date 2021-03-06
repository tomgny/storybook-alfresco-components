import { NodeChildAssociationPaging, NodeEntry } from '@alfresco/js-api';
import { nodeIdToObjectTranslating } from './fake-nodes';

export class ContentApiStub {
  getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
    return nodeIdToObjectTranslating[nodeId].entry.contentUrl;
  }
}

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }

  deleteNode(nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }

  getNodeChildren(nodeId: string, options: any): Promise<NodeChildAssociationPaging> {
    if (options.where) {
      const where: string = options.where;
      const whereCondition: string[] = where.split('=');
      nodeIdToObjectTranslating[nodeId].list.entries = nodeIdToObjectTranslating[nodeId].list.entries.filter(
        (node) => node.entry[whereCondition[0]].toString() == [whereCondition[1]]
      );
    }

    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }
}
