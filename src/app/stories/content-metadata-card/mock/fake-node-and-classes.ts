import { PropertyGroup } from '@alfresco/adf-content-services/lib/content-metadata/interfaces/property-group.interface';
import { Node } from '@alfresco/js-api';

export const mockNode1 = new Node({
  isFile: true,
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2021-08-09T15:17:35.640Z',
  nodeType: 'cm:image',
  content: {
    mimeType: 'image/jpeg',
    mimeTypeName: 'JPEG images',
    sizeInBytes: 8737654,
  },
  createdAt: '2021-08-08T15:17:35.640Z',
  isFolder: false,
  modifiedByUser: { id: 'admin', displayName: 'Administrator' },
  name: '1000555.jpg',
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
  properties: {
    'cm:versionLabel': '1.0',
    'cm:versionType': 'MAJOR',
    'exif:pixelXDimension': '1500',
    'exif:pixelYDimension': [1500, 2000, 3000],
    'exif:fNumber': 'f/1.4',
    'exif:dateTimeOriginal': '2021-08-07T15:17:35.640Z',
    'exif:exposureTime':  1/250,
    'exif:flash':  true,
    'exif:focalLength':  85,
    'exif:isoSpeedRatings':  200,
    'exif:orientation':  'Horizontal',
    'exif:manufacturer':  'Sony',
    'exif:model':  'A6100',
    'cm:description': 'A picture of a building',
    'cm:content': 'Yahalllooo'
  },
  allowableOperations: ['delete', 'update']
});

export const mockNode2 = {
  ...mockNode1,
  aspectNames: ['exif:exif', 'cm:content']
}

export const exifResponse: PropertyGroup = {
  name: 'exif:exif',
  title: 'Exif',
  properties: {
    'exif:pixelYDimension': { title: 'Pixel Y Dimension', name: 'exif:pixelYDimension', dataType: 'number', mandatory: false, multiValued: true },
    'exif:pixelXDimension': { title: 'Pixel X Dimension', name: 'exif:pixelXDimension', dataType: 'number', mandatory: false, multiValued: false },
    'exif:dateTimeOriginal': { title: 'Date and time of data generation', name: 'exif:dateTimeOriginal', dataType: 'string', mandatory: false, multiValued: false },
    'exif:exposureTime': { title: 'Exposure Time', name: 'exif:exposureTime', dataType: 'string', mandatory: false, multiValued: false },
    'exif:fNumber': { title: 'F-Number', name: 'exif:fNumber', dataType: 'string', mandatory: false, multiValued: false },
    'exif:flash': { title: 'Flash', name: 'exif:flash', dataType: 'boolean', mandatory: false, multiValued: false },
    'exif:focalLength': { title: 'Lens focal length', name: 'exif:focalLength', dataType: 'string', mandatory: false, multiValued: false },
    'exif:isoSpeedRatings': { title: 'ISO speed rating', name: 'exif:isoSpeedRatings', dataType: 'number', mandatory: false, multiValued: false },
    'exif:orientation': { title: 'Orientation', name: 'exif:orientationl', dataType: 'string', mandatory: false, multiValued: false },
    'exif:manufacturer': { title: 'Camera manufacturer', name: 'exif:manufacturer', dataType: 'string', mandatory: false, multiValued: false },
    'exif:model': { title: 'Camera model', name: 'exif:model', dataType: 'string', mandatory: false, multiValued: false },
    'exif:software': { title: 'Software', name: 'exif:software', dataType: 'string', mandatory: false, multiValued: false },
  }
};

export const contentResponse: PropertyGroup = {
  name: 'cm:content',
  title: '',
  properties: {
    'cm:content': { title: 'cm:content:id', name: 'cm:content', dataType: '', mandatory: false, multiValued: false }
  }
};
