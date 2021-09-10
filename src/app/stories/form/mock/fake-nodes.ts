import { Node, NodeEntry, SitePaging } from '@alfresco/js-api';
import { mockNode1, mockNode3, mockNode5 } from '../../document-list/mock/fake-nodes';

export const fakeNodeMy = new Node({
  isFile: false,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2017-06-08T13:53:46.495Z',
  nodeType: 'cm:folder',
  parentId: 'fake_node_child_with_pagiation_info',
  createdAt: '2017-05-22T11:36:11.270Z',
  path: {
    name: '/Company Home/User Homes',
    isComplete: true,
    elements: [
      {
        id: '-my-',
        name: 'My nodes'
      },
      { id: '-root-', name: 'Fake root' }
    ]
  },
  isFolder: true,
  modifiedByUser: { id: 'Test', displayName: 'Test' },
  name: 'Fake my folder',
  id: '-my-',
  properties: {},
  allowableOperations: ['delete', 'update', 'create']
});

export const fakeNodeRoot = new Node({
  isFile: false,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2017-06-08T13:53:46.495Z',
  nodeType: 'cm:folder',
  parentId: 'fake_node_child_with_pagiation_info',
  createdAt: '2017-05-22T11:36:11.270Z',
  path: {
    name: '/Company Home/User Homes',
    isComplete: true,
    elements: [
      {
        id: '-my-',
        name: 'My nodes'
      },
      { id: '-root-', name: 'Fake root' }
    ]
  },
  isFolder: true,
  modifiedByUser: { id: 'Test', displayName: 'Test' },
  name: 'Fake root folder',
  id: '-root-',
  properties: {},
  allowableOperations: ['delete', 'update', 'create']
});

export const fakeFolder = {
  list: {
    pagination: { count: 1, hasMoreItems: false, totalItems: 1, skipCount: 0, maxItems: 20 },
    entries: [
      {
        entry: {
          role: 'SiteManager',
          createdAt: '2016-12-06T13:03:14.880+0000',
          path: {
            name: '/Company Home/Sites/swsdp/documentLibrary/empty',
            isComplete: true,
            elements: [
              {
                id: 'ed7ab80e-b398-4bed-b38d-139ae4cc592a',
                name: 'Company Home'
              },
              { id: '99e1368f-e816-47fc-a8bf-3b358feaf31e', name: 'Sites' },
              {
                id: 'b4cff62a-664d-4d45-9302-98723eac1319',
                name: 'swsdp'
              },
              {
                id: '8f2105b4-daaf-4874-9e8a-2152569d109b',
                name: 'documentLibrary'
              },
              { id: '17fa78d2-4d6b-4a46-876b-4b0ea07f7f32', name: 'empty' }
            ]
          },
          isFolder: true,
          isFile: false,
          createdByUser: { id: 'admin', displayName: 'Administrator' },
          modifiedAt: '2016-12-06T13:03:14.880+0000',
          modifiedByUser: { id: 'admin', displayName: 'Administrator' },
          name: 'Fake my folder',
          id: '-root-',
          nodeType: 'cm:folder',
          parentId: '17fa78d2-4d6b-4a46-876b-4b0ea07f7f32'
        }
      },
      {
        entry: mockNode1
      },
      {
        entry: mockNode3
      },
      {
        entry: mockNode5
      }
    ]
  }
};

export const fakeGetFolders = {
  list: {
    pagination: {
      count: 3,
      hasMoreItems: false,
      totalItems: 3,
      skipCount: 0,
      maxItems: 20
    },
    entries: [
      {
        entry: {
          role: 'SiteManager',
          visibility: 'PRIVATE',
          guid: '-my-',
          id: '-my-',
          preset: 'site-dashboard',
          title: 'Admin Site',
          name: 'Fake folder 1'
        }
      },
      {
        entry: {
          role: 'SiteManager',
          visibility: 'PUBLIC',
          guid: '-my-',
          description: 'This is a Sample Alfresco Team site.',
          id: '-my-',
          preset: 'site-dashboard',
          title: 'Sample: Web Site Design Project',
          name: 'Fake folder 2'
        }
      },
      {
        entry: {
          visibility: 'PUBLIC',
          guid: '-my-',
          id: '-my-',
          preset: 'site-dashboard',
          title: 'Test Site',
          name: 'Fake folder 3'
        }
      }
    ]
  }
};

const loremIpsumPdfNode = new NodeEntry({
  entry: {
      isFile: true,
      createdByUser: { id: 'admin', displayName: 'Administrator' },
      modifiedByUser: { id: 'admin', displayName: 'Administrator' },
      name: 'lorem_ipsum.pdf',
      content: {  'mimeType': 'application/pdf',
                  'mimeTypeName': 'Adobe Portable Document Format',
                  'sizeInBytes': 21301,
                  'encoding': 'UTF-8'},
      contentUrl: './assets/fake_folder/lorem_ipsum.pdf',
      id: 'loremIpsumPdfNode',
      modifiedAt: '2020-12-24T15:05:59.640Z',
  }
});

export const fakeNodeEntry: NodeEntry = {
  entry: fakeNodeMy
};

export const fakeNodeEntryRoot: NodeEntry = {
  entry: fakeNodeRoot
};

export const fakeSitePaging: SitePaging = {
  list: {
    pagination: {
      count: 2,
      hasMoreItems: true,
      totalItems: 2,
      skipCount: 0,
      maxItems: 100
    },
    entries: [
      {
        entry: {
          role: 'SiteManager',
          visibility: 'PUBLIC',
          guid: '-root-',
          description: 'Fake root folder',
          id: '-root-',
          preset: 'site-dashboard',
          title: 'Fake root folder'
        }
      }
    ]
  }
};

export const nodeIdToObjectTranslating = {
  '-my-': fakeNodeEntry,
  '-my-_child': fakeFolder,
  '-root-': fakeNodeEntryRoot,
  '-root-_child': fakeGetFolders,
  'loremIpsumPdfNode': loremIpsumPdfNode
};
