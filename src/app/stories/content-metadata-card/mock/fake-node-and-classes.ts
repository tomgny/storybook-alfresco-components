import { PropertyGroup } from '@alfresco/adf-content-services/lib/content-metadata/interfaces/property-group.interface';
import { AspectEntry, AspectPaging, Constraint, Node, TypeEntry, TypePaging } from '@alfresco/js-api';

export const exifMetadataClassDescription: PropertyGroup = {
  name: 'exif:exif',
  title: 'Exif',
  properties: {
    'exif:pixelYDimension': { title: 'Pixel Y Dimension', name: 'exif:pixelYDimension', dataType: 'd:int', mandatory: false, multiValued: false },
    'exif:pixelXDimension': { title: 'Pixel X Dimension', name: 'exif:pixelXDimension', dataType: 'd:int', mandatory: false, multiValued: false },
    'exif:dateTimeOriginal': {
      title: 'Date and time of data generation',
      name: 'exif:dateTimeOriginal',
      dataType: 'd:time',
      mandatory: false,
      multiValued: false
    },
    'exif:exposureTime': { title: 'Exposure Time', name: 'exif:exposureTime', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:fNumber': { title: 'F-Number', name: 'exif:fNumber', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:flash': { title: 'Flash', name: 'exif:flash', dataType: 'd:boolean', mandatory: false, multiValued: false },
    'exif:focalLength': { title: 'Lens focal length', name: 'exif:focalLength', dataType: 'd:int', mandatory: false, multiValued: false },
    'exif:isoSpeedRatings': { title: 'ISO speed rating', name: 'exif:isoSpeedRatings', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:orientation': { title: 'Orientation', name: 'exif:orientation', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:manufacturer': { title: 'Camera manufacturer', name: 'exif:manufacturer', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:model': { title: 'Camera model', name: 'exif:model', dataType: 'd:text', mandatory: false, multiValued: false },
    'exif:software': { title: 'Software', name: 'exif:software', dataType: 'd:text', mandatory: false, multiValued: false }
  }
};

export const customMetadataClassDescription: PropertyGroup = {
  name: 'custom:custom',
  title: 'Custom',
  properties: {
    'custom:path': { title: 'Path (Paths)', name: 'custom:path', dataType: 'd:text', mandatory: false, multiValued: true },
    'custom:source': { title: 'Source', name: 'custom:source', dataType: 'd:text', mandatory: false, multiValued: false },
    'custom:purpose': { title: 'Purpose (purposes) of file', name: 'custom:purpose', dataType: 'd:text', mandatory: false, multiValued: true }
  }
};

export const emptyClassDescription: PropertyGroup = {
  name: '',
  title: '',
  properties: {}
};

export const mockNode = new Node({
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
    'custom:source': 'Camera USB',
    'cm:versionLabel': '1.0',
    'cm:versionType': 'MAJOR',
    'exif:pixelXDimension': '1500',
    'exif:pixelYDimension': '1500',
    'exif:fNumber': 'f/1.4',
    'exif:dateTimeOriginal': '2021-08-07T15:17:35.640Z',
    'exif:exposureTime': '1 / 250',
    'exif:flash': true,
    'exif:focalLength': 85,
    'exif:isoSpeedRatings': '200',
    'exif:orientation': 'Horizontal',
    'exif:manufacturer': 'Sony',
    'exif:model': 'A6100',
    'cm:description': 'A picture of a building',
    'custom:path': ['-my-', 'home/images/trip']
  },
  definition: {
    properties: [
      {
        id: 'exif:isoSpeedRatings',
        constraints: [
          {
            type: 'LIST',
            parameters: {
              allowedValues: ['100', '200', '400', '800', '1600']
            }
          }
        ]
      } as Constraint,
      {
        id: 'custom:source',
        constraints: [
          {
            type: 'LIST',
            parameters: {
              allowedValues: ['Camera USB', 'SD Card', 'WiFi']
            }
          }
        ]
      } as Constraint,
      {
        id: 'exif:exposureTime',
        constraints: [
          {
            type: 'LIST',
            parameters: {
              allowedValues: ['1 / 1000', '1 / 500', '1 / 250', '1 / 125', '1 / 60', '1 / 30', '1 / 15', '1 / 8', '1 / 4', '1 / 2', '1']
            }
          }
        ]
      } as Constraint
    ]
  },
  aspectNames: [customMetadataClassDescription.name, exifMetadataClassDescription.name]
});

export const fakeTypeEntry: TypeEntry = {
  entry: {
    id: 'fake-type-id',
    title: 'fake-title',
    description: 'optional-fake-description',
    parentId: 'cm:parent',
    properties: []
  }
};

export const fakeTypePaging: TypePaging = {
  list: {
    entries: [fakeTypeEntry]
  }
};

const aspectListMock: AspectEntry[] = [
  {
    entry: {
      parentId: 'frs:aspectZero',
      id: 'exif:exif',
      description:
        'Aspect for images, sound, and ancillary tags used by digital cameras (including smartphones), scanners and other systems handling image and sound files recorded by digital cameras.',
      title: 'Exif',
      properties: [
        {
          id: 'exif:pixelYDimension',
          title: 'Number of pixels in Y dimension',
          dataType: 'd:int'
        },
        {
          id: 'exif:pixelXDimension',
          title: 'Number of pixels in X dimension',
          dataType: 'd:int'
        },
        {
          id: 'exif:dateTimeOriginal',
          title: 'Date and time of when photograph was taken',
          dataType: 'd:time'
        },
        {
          id: 'exif:exposureTime',
          title: 'Exposure time',
          dataType: 'd:text'
        },
        {
          id: 'exif:fNumber',
          title: 'Aperture ',
          dataType: 'd:text'
        },
        {
          id: 'exif:flash',
          title: 'Was flash used',
          dataType: 'd:boolean'
        },
        {
          id: 'exif:focalLength',
          title: 'Focal length [mm]',
          dataType: 'd:int'
        },
        {
          id: 'exif:isoSpeedRatings',
          title: 'ISO',
          dataType: 'd:text'
        },
        {
          id: 'exif:orientation',
          title: 'Photograph orientation',
          dataType: 'd:text'
        },
        {
          id: 'exif:manufacturer',
          title: 'Camera manufacturer',
          dataType: 'd:text'
        },
        {
          id: 'exif:model',
          title: 'Camera specific model',
          dataType: 'd:text'
        },
        {
          id: 'exif:software',
          title: 'Software the photograph was edited with',
          dataType: 'd:text'
        }
      ]
    }
  },
  {
    entry: {
      parentId: 'frs:AspectZer',
      id: 'custom:custom',
      description: 'Custom aspect for testing purposes',
      title: 'Custom',
      properties: [
        {
          id: 'custom:path',
          title: 'custom ipsum',
          dataType: 'd:text'
        },
        {
          id: 'custom:source',
          title: 'custom ipsum',
          dataType: 'd:text'
        },
        {
          id: 'custom:purpose',
          title: 'custom ipsum',
          dataType: 'd:text'
        }
      ]
    }
  }
];

export const listAspectResp: AspectPaging = {
  list: {
    entries: aspectListMock
  }
};

export const listAspectRespA: AspectPaging = {
  list: {
    entries: [aspectListMock[0]]
  }
};

export const listAspectRespB: AspectPaging = {
  list: {
    entries: [aspectListMock[1]]
  }
};

export const emptyAspectPaging: AspectPaging = {
  list: {
    entries: []
  }
};
