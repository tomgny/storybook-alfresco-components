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
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
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
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
  properties: {}
});

// export const fakeNodeAnswerWithEntries = {
//   list: {
//     pagination: {
//       count: 4,
//       hasMoreItems: false,
//       totalItems: 14,
//       skipCount: 10,
//       maxItems: 10
//     },
//     entries: [
//       {
//         entry: {
//           isFile: true,
//           createdByUser: { id: 'admin', displayName: 'Administrator' },
//           modifiedAt: '2017-05-24T15:08:55.640Z',
//           nodeType: 'cm:content',
//           content: {
//             mimeType: 'application/rtf',
//             mimeTypeName: 'Rich Text Format',
//             sizeInBytes: 14530,
//             encoding: 'UTF-8'
//           },
//           parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
//           createdAt: '2017-05-24T15:08:55.640Z',
//           path: {
//             name: '/Company Home/Guest Home',
//             isComplete: true,
//             elements: [
//               {
//                 id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
//                 name: 'Company Home'
//               },
//               { id: 'd124de26-6ba0-4f40-8d98-4907da2d337a', name: 'Guest Home' }
//             ]
//           },
//           isFolder: false,
//           modifiedByUser: { id: 'admin', displayName: 'Administrator' },
//           name: 'b_txt_file.rtf',
//           id: '67b80f77-dbca-4f58-be6c-71b9dd61ea53',
//           properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
//           allowableOperations: ['delete', 'update']
//         }
//       }
//     ]
//   }
// };

// export const fakeNodeAnswerWithNOEntries = {
//   list: {
//     pagination: {
//       count: 4,
//       hasMoreItems: false,
//       totalItems: 14,
//       skipCount: 10,
//       maxItems: 10
//     },
//     entries: []
//   }
// };

// export const fakeGetSitesAnswer = {
//   list: {
//     pagination: {
//       count: 3,
//       hasMoreItems: false,
//       totalItems: 3,
//       skipCount: 0,
//       maxItems: 20
//     },
//     entries: [
//       {
//         entry: {
//           role: 'SiteManager',
//           visibility: 'PRIVATE',
//           guid: 'ac65fdbe-0c79-4f67-bd6a-b89a2768561b',
//           id: 'admin-site',
//           preset: 'site-dashboard',
//           title: 'Admin Site'
//         }
//       },
//       {
//         entry: {
//           role: 'SiteManager',
//           visibility: 'PUBLIC',
//           guid: 'b4cff62a-664d-4d45-9302-98723eac1319',
//           description: 'This is a Sample Alfresco Team site.',
//           id: 'swsdp',
//           preset: 'site-dashboard',
//           title: 'Sample: Web Site Design Project'
//         }
//       },
//       {
//         entry: {
//           visibility: 'PUBLIC',
//           guid: 'af36cf8f-d43c-4a4b-84e6-d1b03e3a2ce5',
//           id: 'test-site',
//           preset: 'site-dashboard',
//           title: 'Test Site'
//         }
//       }
//     ]
//   }
// };

// export const fakeGetSiteMembership = {
//   list: {
//     pagination: {
//       count: 2,
//       hasMoreItems: false,
//       totalItems: 2,
//       skipCount: 0,
//       maxItems: 20
//     },
//     entries: [
//       {
//         entry: {
//           site: {
//             role: 'SiteManager',
//             visibility: 'PRIVATE',
//             guid: 'ac65fdbe-0c79-4f67-bd6a-b89a2768561b',
//             id: 'admin-site',
//             preset: 'site-dashboard',
//             title: 'Admin Site'
//           },
//           role: 'SiteManager',
//           guid: 'ac65fdbe-0c79-4f67-bd6a-b89a2768561b',
//           id: 'admin-site'
//         }
//       },
//       {
//         entry: {
//           site: {
//             role: 'SiteManager',
//             visibility: 'PUBLIC',
//             guid: 'b4cff62a-664d-4d45-9302-98723eac1319',
//             description: 'This is a Sample Alfresco Team site.',
//             id: 'swsdp',
//             preset: 'site-dashboard',
//             title: 'Sample: Web Site Design Project'
//           },
//           role: 'SiteManager',
//           guid: 'b4cff62a-664d-4d45-9302-98723eac1319',
//           id: 'swsdp'
//         }
//       }
//     ]
//   }
// };

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
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update']
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
  id: '67b80f77-dbca-4f58-be6c-71b9dd61e554',
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
  id: '67b80f77-dbca-4f58-be6c-71b9dd61e555',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update']
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
  id: '67b80f77-dbca-4f58-be6c-71b9dd61e555',
  properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
  allowableOperations: ['delete', 'update']
});


export const fakeNodePaging: NodePaging = {
  list: {
    pagination: {
      count: 5,
      hasMoreItems: false,
      totalItems: 5,
      skipCount: 0,
      maxItems: 100
    },
    entries: [
      {
        entry: fakeNodeWithCreatePermission
      },
      {
        entry: fakeNodeWithNoPermission
      },
      {
        entry: mockNode4
      },
    ]
  }
};

export const mockPreselectedNodes: NodeEntry[] = [
  {
    entry: mockNode2
  },
];

export const mockNodePagingWithPreselectedNodes: NodePaging = {
  list: {
    pagination: {
      count: 5,
      hasMoreItems: false,
      totalItems: 5,
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
        entry: fakeNodeWithCreatePermission
      },
      {
        entry: fakeNodeWithNoPermission
      },
    ]
  }
};

// export const folderNodeChildrenWithPaginationInfo = new NodeChildAssociationPaging ({
//   list: {
//       pagination: {
//           count: 4,
//           hasMoreItems: false,
//           totalItems: 14,
//           skipCount: 10,
//           maxItems: 10
//       },
//       entries: [fakeNodeWithCreatePermission, fakeNodeWithNoPermission, fakeNodeAnswerWithEntries, fakeNodeAnswerWithNOEntries, fakeGetSitesAnswer, fakeGetSiteMembership, fakeNodePaging, mockNode1, mockNode2, mockNode3]
//   }
// });

export const nodeIdToObjectTranslating = {
  mockNode1: mockNode1,
  mockNode2: mockNode2,
  mockNode3: mockNode3,
  fakeNodeWithCreatePermission: fakeNodeWithCreatePermission,
  fakeNodeWithNoPermission: fakeNodeWithNoPermission
};
