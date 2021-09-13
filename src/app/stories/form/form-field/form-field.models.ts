import { FormFieldModel, FormModel } from '@alfresco/adf-core';

export const fakeForm = new FormModel();

export const uploadField = new FormFieldModel(fakeForm, { id: 'uploadField', type: 'upload' });

export const processUploadField = new FormFieldModel(fakeForm, { id: 'processUploadField', type: 'process-upload' });

export const processCloudUploadField = new FormFieldModel(fakeForm, { id: 'processCloudUploadField', type: 'process-cloud-upload',
params: {
  existingColspan: 1,
  maxColspan: 2,
  fileSource: {
    serviceId: 'alfresco-content',
    name: 'Alfresco Content',
    metadataAllowed: false
  },
  multiple: true,
  menuOptions: {
    show: false,
    download: false,
    retrieveMetadata: false,
    remove: true
  },
  link: false
} });

export const booleanField = new FormFieldModel(fakeForm, { id: 'booleanField', name: 'Checkbox', type: 'boolean' });

export const dateField = new FormFieldModel(fakeForm, { id: 'dateField', value: Date.now(), type: 'date' });

export const processCloudDateField = new FormFieldModel(fakeForm, { id: 'processCloudDateField', value: Date.now(), type: 'process-cloud-date' });

export const dateTimeField = new FormFieldModel(fakeForm, { id: 'dateField', value: Date.now(), type: 'datetime' });

export const readOnlyTextField = new FormFieldModel(fakeForm, { id: 'readOnlyTextField', value: 'Read only text field', type: 'readonly-text' });

export const readOnlyField = new FormFieldModel(fakeForm, { id: 'readOnlyField', value: 'Read only field', type: 'readonly' });

export const integerField = new FormFieldModel(fakeForm, { id: 'integerField', value: 21, name: 'Type only integer', type: 'integer' });

export const peopleField = new FormFieldModel(fakeForm, { id: 'peopleField', value: 'Users', name: 'Users', type: 'people' });

export const processCloudPeopleField = new FormFieldModel(fakeForm, {
  id: 'processCloudPeopleField',
  value: null,
  name: 'Users',
  type: 'process-cloud-people'
});

export const textField = new FormFieldModel(fakeForm, { id: 'textField', name: 'Text Field', value: 'Text field', type: 'text' });

export const unknownType = new FormFieldModel(fakeForm, { id: 'unknownType' });

export const amountField = new FormFieldModel(fakeForm, {
  id: 'amountField',
  value: 512,
  type: 'amount',
  name: 'Amount',
  minValue: '0',
  maxValue: '1024'
});

export const dropdownField = new FormFieldModel(fakeForm, {
  id: 'dropdownField',
  value: '1',
  options: [
    { id: '1', name: 'Item #1' },
    { id: '2', name: 'Item #2' },
    { id: '3', name: 'Item #3' }
  ],
  type: 'dropdown'
});

export const processCloudDropdownField = new FormFieldModel(fakeForm, {
  id: 'processCloudDropdownField',
  value: '1',
  options: [
    { id: '1', name: 'Cloud Item #1' },
    { id: '2', name: 'Cloud Item #2' },
    { id: '3', name: 'Cloud Item #3' }
  ],
  type: 'process-cloud-dropdown'
});

export const multiLineTextField = new FormFieldModel(fakeForm, {
  id: 'multiLineTextField',
  value: 'Multi\nLine\nText\nField',
  type: 'multi-line-text'
});

export const functionalGroupField = new FormFieldModel(fakeForm, {
  id: 'functionalGroupField',
  placeholder: 'Group name (Admins, Users)',
  type: 'functional-group'
});

export const processCloudFunctionalGroupField = new FormFieldModel(fakeForm, {
  id: 'processCloudFunctionalGroupField',
  placeholder: 'Group name',
  type: 'process-cloud-functional-group'
});

export const hyperlinkField = new FormFieldModel(fakeForm, {
  id: 'hyperlinkField',
  value: 'https://www.alfresco.com/',
  displayText: 'Alfresco hyperlink',
  type: 'hyperlink'
});

export const radioButtonsField = new FormFieldModel(fakeForm, {
  id: 'radioButtonsField',
  options: [
    { id: '1', name: 'Item #1' },
    { id: '2', name: 'Item #2' },
    { id: '3', name: 'Item #3' }
  ],
  type: 'radio-buttons'
});

export const dynamicTableField = new FormFieldModel(fakeForm, {
  id: 'dynamicTableField',
  type: 'dynamic-table',
  params: {
    existingColspan: 1,
    maxColspan: 1
  },
  layout: {
    row: -1,
    column: -1,
    colspan: 2
  },
  sizeX: 2,
  sizeY: 2,
  row: -1,
  col: -1,
  columnDefinitions: [
    {
      id: 'id',
      name: 'id',
      type: 'String',
      required: true,
      editable: true,
      sortable: true,
      visible: true
    },
    {
      id: 'name',
      name: 'name',
      type: 'String',
      required: true,
      editable: true,
      sortable: true,
      visible: true
    }
  ]
});

export const groupField = new FormFieldModel(fakeForm, {
  id: 'groupField',
  name: 'Group (Header) section field',
  value: 'users',
  type: 'group',
  fields: {
    1: [textField, amountField, integerField]
  }
});

export const selectFolderField = new FormFieldModel(fakeForm, {
  id: 'selectFolder',
  name: 'Select Folder',
  type: 'select-folder',
  value: null,
  params: {
    folderSource: {
      selectedFolder: {
        pathId: '-my-'
      }
    }
  }
});

export const fileViewerField = new FormFieldModel(fakeForm, {
  id: 'fileViewer',
  name: 'File viewer',
  type: 'file-viewer',
  readOnly: false,
  required: false,
  colspan: 1,
  value: 'loremIpsumPdfNode',
  visibilityCondition: null
});

export const documentField = new FormFieldModel(fakeForm, {
  id: 'document',
  name: 'Document',
  type: 'document',
  readOnly: false,
  required: false,
  colspan: 1,
  value: {
    id: 'test'
  }
});

export const jsonField = new FormFieldModel(fakeForm, {
  id: 'json',
  name: 'json',
  type: 'json',
  readOnly: false,
  required: false,
  colspan: 1,
  value: {
    widget: {
      debug: 'on',
      window: {
        title: 'Sample JSON Widget',
        name: 'main_window',
        width: 500,
        height: 500
      },
      image: {
        src: 'Images/Sun.png',
        name: 'sun1',
        hOffset: 250,
        vOffset: 250,
        alignment: 'center'
      },
      text: {
        data: 'Click Here',
        size: 36,
        style: 'bold',
        name: 'text1',
        hOffset: 250,
        vOffset: 100,
        alignment: 'center',
        onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;'
      }
    }
  }
});

export const typeaheadField = new FormFieldModel(
  new FormModel({ processVariables: [{ name: 'typeahead-id_LABEL', value: 'FakeProcessValue' }], taskId: 999 }),
  {
    id: 'typeahead-id',
    name: 'Typeahead',
    type: 'typeahead',
    params: { field: { id: 'typeahead-id', name: 'typeahead-name', type: 'typeahead' } },
    restUrl: 'https://jsonplaceholder.typicode.com/users',
    restResponsePath: null,
    restIdProperty: 'typeahead-id',
    restLabelProperty: 'typeahead-name'
  }
);

export const containerField = new FormFieldModel(fakeForm, {
  id: 'test',
  name: 'test',
  type: 'container',
  tab: null,
  fields: {
    '1': [
      { id: 'textField', name: 'Text field 1', value: 'Fields', type: 'text' },
      { id: 'textField', value: 'inside', type: 'text' },
      { id: 'textField', name: 'Text field 3', value: 'container field', type: 'text' }
    ],
    '2': [
      { id: 'integerField', value: 123, name: 'Integer field 1', type: 'integer' },
      { id: 'integerField', value: 321, type: 'integer' },
      { id: 'integerField', value: 999, name: 'Integer field 3', type: 'integer' }
    ],
    '3': [
      { id: 'readOnlyField', name: 'Readonly field 1', value: 'Fields', type: 'readonly' },
      { id: 'readOnlyField', value: 'inside', type: 'readonly' },
      { id: 'readOnlyField', name: 'Readonly field 3', value: 'field', type: 'readonly' }
    ]
  }
});
