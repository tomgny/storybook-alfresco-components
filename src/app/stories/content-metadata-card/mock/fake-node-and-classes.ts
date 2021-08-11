import { PropertyGroup } from '@alfresco/adf-content-services/lib/content-metadata/interfaces/property-group.interface';
import { Constraint, Node } from '@alfresco/js-api';

export const exifMetadataClassDescription: PropertyGroup = {
  name: 'exif:exif',
  title: 'Exif',
  properties: {
    'exif:pixelYDimension': { title: 'Pixel Y Dimension', name: 'exif:pixelYDimension', dataType: 'number', mandatory: false, multiValued: false },
    'exif:pixelXDimension': { title: 'Pixel X Dimension', name: 'exif:pixelXDimension', dataType: 'number', mandatory: false, multiValued: false },
    'exif:dateTimeOriginal': {
      title: 'Date and time of data generation',
      name: 'exif:dateTimeOriginal',
      dataType: 'string',
      mandatory: false,
      multiValued: false
    },
    'exif:exposureTime': { title: 'Exposure Time', name: 'exif:exposureTime', dataType: 'string', mandatory: false, multiValued: false },
    'exif:fNumber': { title: 'F-Number', name: 'exif:fNumber', dataType: 'string', mandatory: false, multiValued: false },
    'exif:flash': { title: 'Flash', name: 'exif:flash', dataType: 'boolean', mandatory: false, multiValued: false },
    'exif:focalLength': { title: 'Lens focal length', name: 'exif:focalLength', dataType: 'string', mandatory: false, multiValued: false },
    'exif:isoSpeedRatings': { title: 'ISO speed rating', name: 'exif:isoSpeedRatings', dataType: 'number', mandatory: false, multiValued: false },
    'exif:orientation': { title: 'Orientation', name: 'exif:orientation', dataType: 'string', mandatory: false, multiValued: false },
    'exif:manufacturer': { title: 'Camera manufacturer', name: 'exif:manufacturer', dataType: 'string', mandatory: false, multiValued: false },
    'exif:model': { title: 'Camera model', name: 'exif:model', dataType: 'string', mandatory: false, multiValued: false },
    'exif:software': { title: 'Software', name: 'exif:software', dataType: 'string', mandatory: false, multiValued: false }
  }
};

export const customMetadataClassDescription: PropertyGroup = {
  name: 'custom:custom',
  title: 'Custom metadata',
  properties: {
    'custom:path': { title: 'Path (Paths)', name: 'custom:path', dataType: 'd:text', mandatory: false, multiValued: true },
    'custom:source': { title: 'Source', name: 'custom:source', dataType: 'string', mandatory: false, multiValued: false },
    'custom:purpose': { title: 'Purpose (purposes) of file', name: 'custom:purpose', dataType: 'select', mandatory: false, multiValued: true }
  }
};

export const mockNode1 = new Node({
  name: '1000555.jpg',
  id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
  isFile: true,
  isFolder: false,
  nodeType: 'cm:content',
  createdByUser: { id: 'admin', displayName: 'Administrator' },
  createdAt: '2021-08-08T15:17:35.640Z',
  modifiedByUser: { id: 'admin', displayName: 'Administrator' },
  modifiedAt: '2021-08-09T15:17:35.640Z',
  content: {
    mimeType: 'image/jpeg',
    mimeTypeName: 'JPEG images',
    sizeInBytes: 8737654
  },
  allowableOperations: ['delete', 'update'],
  properties: {
    'cm:versionLabel': '1.0',
    'cm:versionType': 'MAJOR',
    'exif:pixelXDimension': '1500',
    'exif:pixelYDimension': '1500',
    'exif:fNumber': 'f/1.4',
    'exif:dateTimeOriginal': '2021-08-07T15:17:35.640Z',
    'exif:exposureTime': 1 / 250,
    'exif:flash': true,
    'exif:focalLength': 85,
    'exif:isoSpeedRatings': 200,
    'exif:orientation': 'Horizontal',
    'exif:manufacturer': 'Sony',
    'exif:model': 'A6100',
    'cm:description': 'A picture of a building',
    'custom:source': 'External device',
    'custom:path': ['-my-', 'home/images/trip', 'Czy', 'To', 'Prawda', 'ze jestem', 'glupi']
  },
  definition: {
    properties: [{
        id: 'custom:source',
        constraints: [
            {
                type: 'LIST',
                parameters: {
                    allowedValues: ['External device', 'two', 'three']
                }
            }
        ]
    } as Constraint]
}

});

export const mockNode2 = {
  ...mockNode1,
  aspectNames: [exifMetadataClassDescription.name, customMetadataClassDescription.name]
};
