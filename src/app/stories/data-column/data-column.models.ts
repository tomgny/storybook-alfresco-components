import { ObjectDataTableAdapter } from '@alfresco/adf-core';

export const dataText = new ObjectDataTableAdapter([{ id: '1 first' }, { id: '2 second' }, { id: '3 third' }], []);

export let dateRows = [
  { createdOn: new Date(2016, 6, 1, 11, 8, 4) },
  { createdOn: new Date(2018, 4, 3, 12, 8, 4) },
  { createdOn: new Date(2021, 2, 3, 9, 8, 4) }
];

export let dateColumn = [{ type: 'date', key: 'createdOn', title: 'Created On', format: 'medium' }];

export let locationRows = [
  {
    path: {
      elements: [
        { id: '1', name: 'path' },
        { id: '2', name: 'to' },
        { id: '3', name: 'location' }
      ],
      name: '/path/to/location-link'
    }
  }
];

export let locationColumn = [{ format: '/somewhere', type: 'location', key: 'path', title: 'Location' }];

export const dataIcon = new ObjectDataTableAdapter([{ icon: 'alarm' }, { icon: 'folder_open' }, { icon: 'accessibility' }], []);

export const dataSizeInBytes = new ObjectDataTableAdapter([{ size: 12313 }, { size: 23 }, { size: 42421412421 }], []);
