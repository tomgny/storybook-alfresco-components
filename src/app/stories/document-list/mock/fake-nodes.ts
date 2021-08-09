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
  id: 'mock_node_1',
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
  id: 'mock_node_2',
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
  name: 'd_txt_file.pdf',
  id: 'mock_node_5',
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
        entry: mockNode2
      },
      {
        entry: mockNode4
      },
      {
        entry: mockNode5
      },
    ]
  }
};

export const mockPreselectedNodes: NodeEntry[] = [
  {
    entry: mockNode1
  },
  {
    entry: mockNode3
  },
  {
    entry: mockNode5
  },
];

export const mockNodePaging: NodePaging = {
  list: {
    pagination: {
      count: 7,
      hasMoreItems: false,
      totalItems: 7,
      skipCount: 0,
      maxItems: 2
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
  'mock_node_1': mockNode1,
  'mock_node_2': mockNode2,
  'mock_node_3': mockNode3,
  'mock_node_4': mockNode4,
  'mock_node_5': mockNode5,
  'fake_node_with_create_permission': fakeNodeWithCreatePermission,
  'fake_node_with_no_permission': fakeNodeWithNoPermission
};

export const mimeTypeIcons: any = {
  'image/png': './assets/images/ft_ic_raster_image.svg',
  'image/jpeg': './assets/images/ft_ic_raster_image.svg',
  'image/gif': './assets/images/ft_ic_raster_image.svg',
  'image/bmp': './assets/images/ft_ic_raster_image.svg',
  'image/cgm': './assets/images/ft_ic_raster_image.svg',
  'image/ief': './assets/images/ft_ic_raster_image.svg',
  'image/jp2': './assets/images/ft_ic_raster_image.svg',
  'image/tiff': './assets/images/ft_ic_raster_image.svg',
  'image/vnd.adobe.photoshop': './assets/images/ft_ic_raster_image.svg',
  'image/vnd.adobe.premiere': './assets/images/ft_ic_raster_image.svg',
  'image/x-cmu-raster': './assets/images/ft_ic_raster_image.svg',
  'image/x-dwt': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-anymap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-bitmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-graymap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-pixmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-adobe': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-canon': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-fuji': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-hasselblad': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-kodak': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-leica': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-minolta': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-nikon': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-olympus': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-panasonic': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-pentax': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-red': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-sigma': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-sony': './assets/images/ft_ic_raster_image.svg',
  'image/x-xbitmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-xpixmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-xwindowdump': './assets/images/ft_ic_raster_image.svg',
  'image/svg+xml': './assets/images/ft_ic_vector_image.svg',
  'application/eps': './assets/images/ft_ic_raster_image.svg',
  'application/illustrator': './assets/images/ft_ic_raster_image.svg',
  'application/pdf': './assets/images/ft_ic_pdf.svg',
  'application/vnd.ms-excel': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.addin.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.sheet.binary.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.sheet.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.template.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.sun.xml.calc': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.sun.xml.calc.template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-outlook': './assets/images/ft_ic_document.svg',
  'application/msword': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-word.document.macroenabled.12': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-word.template.macroenabled.12': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.sun.xml.writer': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.sun.xml.writer.template': './assets/images/ft_ic_ms_word.svg',
  'application/rtf': './assets/images/ft_ic_ms_word.svg',
  'text/rtf': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-powerpoint': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.presentation': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.presentation-template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.slide': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.sun.xml.impress': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.sun.xml.impress.template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.spreadsheet': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.oasis.opendocument.spreadsheet-template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-powerpoint.addin.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.presentation.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.slide.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.slideshow.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.template.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'video/mp4': './assets/images/ft_ic_video.svg',
  'video/3gpp': './assets/images/ft_ic_video.svg',
  'video/3gpp2': './assets/images/ft_ic_video.svg',
  'video/mp2t': './assets/images/ft_ic_video.svg',
  'video/mpeg': './assets/images/ft_ic_video.svg',
  'video/mpeg2': './assets/images/ft_ic_video.svg',
  'video/ogg': './assets/images/ft_ic_video.svg',
  'video/quicktime': './assets/images/ft_ic_video.svg',
  'video/webm': './assets/images/ft_ic_video.svg',
  'video/x-flv': './assets/images/ft_ic_video.svg',
  'video/x-m4v': './assets/images/ft_ic_video.svg',
  'video/x-ms-asf': './assets/images/ft_ic_video.svg',
  'video/x-ms-wmv': './assets/images/ft_ic_video.svg',
  'video/x-msvideo': './assets/images/ft_ic_video.svg',
  'video/x-rad-screenplay':  './assets/images/ft_ic_video.svg',
  'video/x-sgi-movie': './assets/images/ft_ic_video.svg',
  'video/x-matroska': './assets/images/ft_ic_video.svg',
  'audio/mpeg': './assets/images/ft_ic_audio.svg',
  'audio/ogg': './assets/images/ft_ic_audio.svg',
  'audio/wav': './assets/images/ft_ic_audio.svg',
  'audio/basic': './assets/images/ft_ic_audio.svg',
  'audio/mp3': './assets/images/ft_ic_audio.svg',
  'audio/mp4': './assets/images/ft_ic_audio.svg',
  'audio/vnd.adobe.soundbooth': './assets/images/ft_ic_audio.svg',
  'audio/vorbis': './assets/images/ft_ic_audio.svg',
  'audio/x-aiff': './assets/images/ft_ic_audio.svg',
  'audio/x-flac': './assets/images/ft_ic_audio.svg',
  'audio/x-ms-wma': './assets/images/ft_ic_audio.svg',
  'audio/x-wav': './assets/images/ft_ic_audio.svg',
  'x-world/x-vrml': './assets/images/ft_ic_video.svg',
  'text/plain': './assets/images/ft_ic_document.svg',
  'application/vnd.oasis.opendocument.text': './assets/images/ft_ic_document.svg',
  'application/vnd.oasis.opendocument.text-template': './assets/images/ft_ic_document.svg',
  'application/x-javascript': './assets/images/ft_ic_document.svg',
  'application/json': './assets/images/ft_ic_document.svg',
  'text/csv': './assets/images/ft_ic_document.svg',
  'text/xml': './assets/images/ft_ic_document.svg',
  'text/html': './assets/images/ft_ic_website.svg',
  'application/x-compressed': './assets/images/ft_ic_archive.svg',
  'application/x-zip-compressed': './assets/images/ft_ic_archive.svg',
  'application/zip': './assets/images/ft_ic_archive.svg',
  'application/x-tar': './assets/images/ft_ic_archive.svg',
  'application/vnd.apple.keynote': './assets/images/ft_ic_presentation.svg',
  'application/vnd.apple.pages': './assets/images/ft_ic_document.svg',
  'application/vnd.apple.numbers': './assets/images/ft_ic_spreadsheet.svg',
  'application/vnd.visio': './assets/images/ft_ic_document.svg',
  'application/wordperfect': './assets/images/ft_ic_document.svg',
  'application/x-cpio': './assets/images/ft_ic_document.svg',
  'folder': './assets/images/ft_ic_folder.svg',
  'smartFolder': './assets/images/ft_ic_smart_folder.svg',
  'ruleFolder': './assets/images/ft_ic_folder_rule.svg',
  'linkFolder': './assets/images/ft_ic_folder_shortcut_link.svg',
  'disable/folder': './assets/images/ft_ic_folder_disable.svg',
  'selected': './assets/images/ft_ic_selected.svg',
  'dynamic-feed': './assets/images/dynamic_feed-24px.svg',
  'ic-process': './assets/images/ic-process.svg',
  'filter': './assets/images/ft_ic_filter.svg',
  'save-as': './assets/images/save-as.svg',
  'save': './assets/images/save.svg',
  'task': './assets/images/task.svg'
};
