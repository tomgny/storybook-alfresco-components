import { FormFieldModel, FormModel } from '@alfresco/adf-core';

export const fakeForm = new FormModel();

export const uploadField = new FormFieldModel(fakeForm, { id: 'uploadField', type: 'upload' });

export const booleanField = new FormFieldModel(fakeForm, { id: 'booleanField', name: 'Checkbox', type: 'boolean' });

export const dateField = new FormFieldModel(fakeForm, { id: 'dateField', value: Date.now(), type: 'date' });

export const readOnlyTextField = new FormFieldModel(fakeForm, { id: 'readOnlyTextField', value: 'Read only text field', type: 'readonly-text' });

export const readOnlyField = new FormFieldModel(fakeForm, { id: 'readOnlyField', value: 'Read only field', type: 'readonly' });

export const integerField = new FormFieldModel(fakeForm, { id: 'integerField', value: 21, name: 'Type only integer', type: 'integer' });

export const peopleField = new FormFieldModel(fakeForm, { id: 'peopleField', value: 'Users', name: 'Users', type: 'people' });

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
  name: 'Group section field',
  value: 'users',
  type: 'group',
  fields: {
    1: [textField, amountField, integerField]
  }
});
