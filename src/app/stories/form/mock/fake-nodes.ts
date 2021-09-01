import { Node, NodeChildAssociation, NodeChildAssociationPaging, NodeEntry, NodePaging } from '@alfresco/js-api';

export const mockNode1 = new NodeChildAssociation({
  isFile: true,
  createdByUser: { id: 'admin1', displayName: 'Administrator 1' },
  modifiedAt: '2017-05-25T16:08:55.640Z',
  nodeType: 'cm:content',
  content: {
    mimeType: 'application/rtf',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 222214530,
    encoding: 'UTF-8'
  },
  parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
  createdAt: '2017-02-24T15:07:55.640Z',
  path: {
    name: '/Company Home/Guest Home',
    isComplete: true,
    elements: [
      {
        id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
        name: 'Company Home'
      },
      { id: 'd124de26-6ba0-4f40-8d98-4907da2d337a', name: 'Guest Home' }
    ]
  },
  isFolder: false,
  modifiedByUser: { id: 'admin1', displayName: 'Administrator 1' },
  name: 'a_txt_file.rtf',
  id: 'mock_node_1',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update', 'create'],
  association: { assocType: 'assoc-1', isPrimary: true }
});

export const mockNode2 = new NodeChildAssociation({
  isFile: true,
  createdByUser: { id: 'admin2', displayName: 'Administrator 2' },
  modifiedAt: '2017-07-28T5:38:55.640Z',
  nodeType: 'cm:content',
  content: {
    mimeType: 'application/rtf',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 33333312530,
    encoding: 'UTF-8'
  },
  parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
  createdAt: '2017-05-24T15:08:55.640Z',
  path: {
    name: '/Company Home/Guest Home',
    isComplete: true,
    elements: [
      {
        id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
        name: 'Company Home'
      },
      { id: 'd124de26-6ba0-4f40-8d98-4907da2d337a', name: 'Guest Home' }
    ]
  },
  isFolder: false,
  modifiedByUser: { id: 'admin2', displayName: 'Administrator 2' },
  name: 'b_txt_file.rtf',
  id: 'mock_node_2',
  icon: '../../../../assets/images/fake_image_2_24x24.png',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update'],
  association: { assocType: 'assoc-1', isPrimary: false }
});

export const fakeNodeWithCreatePermission = new Node({
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
        id: 'fake_node_with_create_permission',
        name: 'fakeNodeWithCreatePermission'
      },
      { id: 'mock_node_2', name: 'fakeNode2' }
    ]
  },
  isFolder: true,
  modifiedByUser: { id: 'Test', displayName: 'Test' },
  name: 'fakeNodeWithCreatePermission',
  id: 'fake_node_with_create_permission',
  properties: {},
  allowableOperations: ['delete', 'update', 'create']
});

export const folderNodeChildrenWithPaginationInfo = new NodeChildAssociationPaging({
  list: {
    pagination: {
      count: 4,
      hasMoreItems: false,
      totalItems: 14,
      skipCount: 10,
      maxItems: 10
    },
    entries: [mockNode1, mockNode2],
    source: mockNode1
  }
});

export const fakeNodeList = new NodePaging({ list: { entries: [{ entry: { id: 'fake-node-id', name: 'fake-node-name', isFolder: true } }] } });

export const fakeNodeEntry: NodeEntry = {
  entry: fakeNodeWithCreatePermission
};

export const nodeIdToObjectTranslating = {
  '-my-': fakeNodeWithCreatePermission,
  fake_node_with_create_permission: fakeNodeWithCreatePermission,
  fake_node_child_with_pagiation_info: folderNodeChildrenWithPaginationInfo
};
