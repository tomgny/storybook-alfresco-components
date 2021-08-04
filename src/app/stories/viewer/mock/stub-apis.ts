import { NodeChildAssociationPaging, NodeEntry } from '@alfresco/js-api';
import { fakeNodeAnswerWithEntries, nodes } from './fake-nodes';

export class ContentApiStub {

    getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
        return nodes[nodeId].entry.contentUrl;
    };

}

export class NodesApiStub {
    getNode(nodeId: string, _?: any): Promise<NodeEntry> {
        return Promise.resolve(nodes[nodeId])
    }

    getNodeChildren(_: string, _2?: any): Promise<NodeChildAssociationPaging> {        
        return Promise.resolve(fakeNodeAnswerWithEntries);
    }
}