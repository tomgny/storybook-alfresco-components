import { NodeChildAssociationPaging, NodeEntry, SitePaging } from '@alfresco/js-api';
import { fakeNodeEntry, folderNodeChildrenWithPaginationInfo } from './fake-nodes';

export class ModelsApiStub {}

export class GroupApiStub {}

const fakeSitePaging: SitePaging = {
  'list': {
      'pagination': {
          'count': 2,
          'hasMoreItems': true,
          'totalItems': 2,
          'skipCount': 0,
          'maxItems': 100
      },
      'entries': [
          {
              'entry': {
                  'role': 'SiteManager',
                  'visibility': 'PUBLIC',
                  'guid': 'fake_node_with_create_permission',
                  'description': 'fake-test-site',
                  'id': 'fake-test-site',
                  'preset': 'site-dashboard',
                  'title': 'fake-test-site'
              }
          },
          {
              'entry': {
                  'role': 'SiteManager',
                  'visibility': 'PUBLIC',
                  'guid': 'mock_node_1',
                  'description': 'This is a Sample Alfresco Team site.',
                  'id': 'swsdp',
                  'preset': 'site-dashboard',
                  'title': 'fake-test-2'
              }
          }
      ]
  }
};

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    //console.log(mockPreselectedNodes);
    console.log('getNode id: ', nodeId);
    //console.log(nodeIdToObjectTranslating[nodeId]);
    return Promise.resolve(fakeNodeEntry);
  }

  getNodeChildren(nodeId: string, _options: any): Promise<NodeChildAssociationPaging> {
    console.log('(getNodeChildren)folderNodeChilren: ');
    console.log(folderNodeChildrenWithPaginationInfo);
    console.log('getNodeChildren id: ', nodeId);
    //console.log(nodeIdToObjectTranslating[nodeId]);
    return Promise.resolve(folderNodeChildrenWithPaginationInfo);
  }
}

export class SitesApiStub {
  listSites(_opts?: any): Promise<SitePaging>{
    console.log(fakeSitePaging);
    return Promise.resolve(fakeSitePaging);
  }
}
