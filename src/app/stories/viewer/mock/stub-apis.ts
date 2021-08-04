import { NodeChildAssociationPaging, NodeEntry } from '@alfresco/js-api';
import { fakeFolderNodeAnswer, nodesIds } from './fake-nodes';

export class ContentApiStub {

    getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
        return nodesIds[nodeId].entry.contentUrl;
    };

}

export class NodesApiStub {
    getNode(nodeId: string, _?: any): Promise<NodeEntry> {
        return Promise.resolve(nodesIds[nodeId])
    }

    getNodeChildren(_: string, _2?: any): Promise<NodeChildAssociationPaging> {        
        return Promise.resolve(fakeFolderNodeAnswer);
    }
}