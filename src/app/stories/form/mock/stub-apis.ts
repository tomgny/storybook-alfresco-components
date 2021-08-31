import { NodeChildAssociationPaging, NodeEntry, SitePaging } from '@alfresco/js-api';
import { mockNode1, mockNode2, mockNode3 } from '../../document-list/mock/fake-nodes';

export class ModelsApiStub {}

export class GroupApiStub {}

const mockPreselectedNodes: NodeEntry = {
    entry: mockNode1
};

const folderNodeChildrenWithPaginationInfo = new NodeChildAssociationPaging ({
  list: {
      pagination: {
          count: 4,
          hasMoreItems: false,
          totalItems: 14,
          skipCount: 10,
          maxItems: 10
      },
      entries: [mockNode1, mockNode2, mockNode3]
  }
});

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
                  'guid': 'fake-1',
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
                  'guid': 'fake-2',
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
  getNode(_nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(mockPreselectedNodes);
  }

  getNodeChildren(_nodeId: string, _options: any): Promise<NodeChildAssociationPaging> {
    return Promise.resolve(folderNodeChildrenWithPaginationInfo);
  }
}

export class SitesApiStub {

  listSites(_opts?: any): Promise<SitePaging>{
    console.log(fakeSitePaging);

    return Promise.resolve(fakeSitePaging);
  }
}
