import { NodeEntry } from '@alfresco/js-api';
import { ReplaySubject, Subject } from 'rxjs';

class ContentApiStub {

    getContentUrl(nodeId: string, attachment?: boolean, ticket?: string): string {
        console.log(nodeId, attachment, ticket);
        return './assets/texts/node_file.txt'
    };

}

class NodesApiStub {
    getNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        console.log(nodeId, opts);
        return Promise.resolve(new NodeEntry({ 
            entry: { 
                isFile: true, 
                createdByUser: { id: 'admin', displayName: 'Administrator' },
                modifiedByUser: { id: 'admin', displayName: 'Administrator' },
                name: 'node_file.txt', 
                content: {  'mimeType': 'text/plain',
                            'mimeTypeName': 'Text',
                            'sizeInBytes': 14530,
                            'encoding': 'UTF-8'}, 
                 
            } 
        }))
    }
}

// node = {
//     'isFile': true,
//     'createdByUser': { 'id': 'admin', 'displayName': 'Administrator' },
//     'modifiedAt': '2017-05-24T15:08:55.640Z',
//     'nodeType': 'cm:content',
//     'content': {
//         'mimeType': 'application/rtf',
//         'mimeTypeName': 'Rich Text Format',
//         'sizeInBytes': 14530,
//         'encoding': 'UTF-8'
//     },
//     'parentId': 'd124de26-6ba0-4f40-8d98-4907da2d337a',
//     'createdAt': '2017-05-24T15:08:55.640Z',
//     'path': {
//         'name': '/Company Home/Guest Home',
//         'isComplete': true,
//         'elements': [{
//             'id': '94acfc73-7014-4475-9bd9-93a2162f0f8c',
//             'name': 'Company Home'
//         }, { 'id': 'd124de26-6ba0-4f40-8d98-4907da2d337a', 'name': 'Guest Home' }]
//     },
//     'isFolder': false,
//     'modifiedByUser': { 'id': 'admin', 'displayName': 'Administrator' },
//     'name': 'b_txt_file.rtf',
//     'id': '70e1cc6a-6918-468a-b84a-1048093b06fd',
//     'properties': { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
//     'allowableOperations': ['delete', 'update']
// };

export class AlfrescoApiServiceStub {

    nodesApi = new NodesApiStub();

    contentApi = new ContentApiStub();

    nodeUpdated = new Subject<Node>();

    alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

    load() {};
    
}