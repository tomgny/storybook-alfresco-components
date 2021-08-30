import { Node, NodeEntry } from '@alfresco/js-api';

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
  allowableOperations: ['delete', 'update', 'create', 'copy', 'lock', 'updatePermissions']
});

export const mockNodeEntry: NodeEntry = {
  entry: fakeNodeWithCreatePermission
};

export const nodeIdToObjectTranslating = {
  fake_node_with_create_permission: fakeNodeWithCreatePermission
};
