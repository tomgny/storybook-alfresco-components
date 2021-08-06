import { PropertyGroup } from '@alfresco/adf-content-services/lib/content-metadata/interfaces/property-group.interface';
import { Node } from '@alfresco/js-api';

export const mockNode1 = new Node({
  isFile: true,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2017-05-24T15:08:55.640Z',
  nodeType: 'cm:content',
  aspectNames: ['exif:exif'],
  content: {
    mimeType: 'application/rtf',
    mimeTypeName: 'Rich Text Format',
    sizeInBytes: 14530,
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
  modifiedByUser: { id: 'admin', displayName: 'Administrator' },
  name: 'b_txt_file.rtf',
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
  properties: {
    'cm:versionLabel': '1.0',
    'cm:versionType': 'MAJOR',
    'exif:pixelXDimension': '1500',
    'exif:pixelYDimension': [1500, 2000, 3000],
    'exif:fNumber': '1.4',
    'exif:2': 'yes',
  },
  allowableOperations: ['delete', 'update']
});

export const exifResponse: PropertyGroup = {
  name: 'exif:exif',
  title: 'Exif',
  properties: {
    'exif:pixelYDimension': { title: 'exif:pixelYDimension:id', name: 'exif:pixelYDimension', dataType: 'number', mandatory: false, multiValued: true },
    'exif:2': { title: 'exif:2:id', name: 'exif:2', dataType: '', mandatory: false, multiValued: false }
  }
};

export const contentResponse: PropertyGroup = {
  name: 'cm:content',
  title: '',
  properties: {
    'cm:content': { title: 'cm:content:id', name: 'cm:content', dataType: '', mandatory: false, multiValued: false }
  }
};