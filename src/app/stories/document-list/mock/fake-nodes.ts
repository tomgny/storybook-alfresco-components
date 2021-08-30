import { Node, NodePaging, NodeEntry } from '@alfresco/js-api';

export const fakeNodeWithCreatePermission = new Node({
  isFile: false,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2017-06-08T13:53:46.495Z',
  nodeType: 'cm:folder',
  parentId: '55052317-7e59-4058-8e07-769f41e615e1',
  createdAt: '2017-05-22T11:36:11.270Z',
  path: {
    name: '/Company Home/User Homes',
    isComplete: true,
    elements: [
      {
        id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
        name: 'Company Home'
      },
      { id: '55052317-7e59-4058-8e07-769f41e615e1', name: 'User Homes' }
    ]
  },
  isFolder: true,
  modifiedByUser: { id: 'Test', displayName: 'Test' },
  name: 'fakeNodeWithCreatePermission',
  id: 'fake_node_with_create_permission',
  properties: {},
  allowableOperations: ['delete', 'update', 'create']
});

export const fakeNodeWithNoPermission = new Node({
  isFile: false,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2017-03-18T12:33:16.495Z',
  nodeType: 'cm:folder',
  parentId: '55052317-7e59-4058-8e07-769f41e615e1',
  aspectNames: ['cm:ownable', 'cm:auditable'],
  createdAt: '2017-05-22T11:36:11.270Z',
  path: {
    name: '/Company Home/User Homes',
    isComplete: true,
    elements: [
      {
        id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
        name: 'Company Home'
      },
      { id: '55052317-7e59-4058-8e07-769f41e615e1', name: 'User Homes' }
    ]
  },
  isFolder: true,
  modifiedByUser: { id: 'Test2', displayName: 'Test2' },
  name: 'fakeNodeWithNoPermission',
  id: 'fake_node_with_no_permission',
  icon: '../../../../assets/images/alfresco-24x24.png',
  properties: {}
});

export const mockNode1 = new Node({
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
  allowableOperations: ['delete', 'update', 'create']
});

export const mockNode2 = new Node({
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
  allowableOperations: ['delete', 'update']
});

export const mockNode3 = new Node({
  isFile: true,
  createdByUser: { id: 'admin3', displayName: 'Administrator 3' },
  modifiedAt: '2017-12-24T22:32:23.640Z',
  nodeType: 'cm:content',
  content: {
    mimeType: 'application/pdf',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 24530,
    encoding: 'UTF-8'
  },
  parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
  createdAt: '2017-05-23T12:08:55.640Z',
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
  modifiedByUser: { id: 'admin3', displayName: 'Administrator 3' },
  name: 'c_txt_file.pdf',
  id: 'mock_node_3',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update', 'create']
});

export const mockNode4 = new Node({
  isFile: true,
  createdByUser: { id: 'admin4', displayName: 'Administrator 4' },
  modifiedAt: '2017-11-24T11:42:23.640Z',
  nodeType: 'cm:content',
  content: {
    mimeType: 'application/pdf',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 4444444444530,
    encoding: 'UTF-8'
  },
  parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
  createdAt: '2017-05-23T12:08:55.640Z',
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
  modifiedByUser: { id: 'admin4', displayName: 'Administrator 4' },
  name: 'd_txt_file.pdf',
  id: 'mock_node_4',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update']
});

export const mockNode5 = new Node({
  isFile: true,
  createdByUser: { id: 'admin5', displayName: 'Administrator 5' },
  modifiedAt: '2017-11-24T11:42:23.640Z',
  nodeType: 'cm:content',
  content: {
    mimeType: 'image/png',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 44530,
    encoding: 'UTF-8'
  },
  parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
  createdAt: '2017-05-23T12:08:55.640Z',
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
  modifiedByUser: { id: 'admin5', displayName: 'Administrator 5' },
  name: 'e_png_file.png',
  id: 'mock_node_5',
  icon: '../../../../assets/images/fake_image_1_24x24.png',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update']
});

export const fakeNodePaging: NodePaging = {
  list: {
    pagination: {
      count: 3,
      hasMoreItems: false,
      totalItems: 3,
      skipCount: 0,
      maxItems: 5
    },
    entries: [
      {
        entry: mockNode2
      },
      {
        entry: mockNode4
      },
      {
        entry: mockNode5
      }
    ]
  }
};

export const mockPreselectedNodes: NodeEntry[] = [
  {
    entry: mockNode1
  },
  {
    entry: mockNode2
  },
  {
    entry: mockNode3
  }
];

export const mockNodePaging: NodePaging = {
  list: {
    pagination: {
      count: 5,
      hasMoreItems: false,
      totalItems: 7,
      skipCount: 0,
      maxItems: 5
    },
    entries: [
      {
        entry: mockNode1
      },
      {
        entry: mockNode2
      },
      {
        entry: mockNode3
      },
      {
        entry: mockNode4
      },
      {
        entry: mockNode5
      },
      {
        entry: fakeNodeWithCreatePermission
      },
      {
        entry: fakeNodeWithNoPermission
      }
    ]
  }
};

export const nodeIdToObjectTranslating = {
  mock_node_1: mockNode1,
  mock_node_2: mockNode2,
  mock_node_3: mockNode3,
  mock_node_4: mockNode4,
  mock_node_5: mockNode5,
  fake_node_with_create_permission: fakeNodeWithCreatePermission,
  fake_node_with_no_permission: fakeNodeWithNoPermission,
  '-root-': mockNodePaging
};
