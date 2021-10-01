import { TaskDetailsCloudModel } from '@alfresco/adf-process-services-cloud';

const taskAssignedDetails: TaskDetailsCloudModel = {
  appName: 'simple-app',
  assignee: 'admin.adf',
  completedDate: null,
  createdDate: new Date(1555419255340),
  dueDate: new Date(1558419255340),
  description: null,
  formKey: '4',
  priority: 1,
  parentTaskId: 'bd6b1741-6046-11e9-80f0-0a586460040d',
  id: 'bd6b1741-6046-11e9-80f0-0a586460040d',
  name: 'Task1',
  owner: 'admin.adf',
  standalone: true,
  status: 'ASSIGNED'
};

const taskCompletedDetails: TaskDetailsCloudModel = {
  ...taskAssignedDetails,
  status: 'COMPLETED'
};

export const tasksDetailsContainer = {
  taskAssigned: taskAssignedDetails,
  taskCompleted: taskCompletedDetails
};

export const formDisplayValueVisibility: any = {
  formRepresentation: {
    id: 'form-4cba4f68-aac3-45fc-8d43-2ae7b6d21236',
    name: 'test-form-cloud',
    description: '',
    version: 0,
    standAlone: true,
    formDefinition: {
      tabs: [],
      fields: [
        {
          id: 'c2fbf887-96e0-41e3-b207-ae2c1d8b1c41',
          name: 'Label',
          type: 'container',
          tab: null,
          numberOfColumns: 2,
          fields: {
            '1': [
              {
                id: 'Radiobuttons05o2zg',
                name: 'Radio buttons',
                type: 'radio-buttons',
                readOnly: false,
                required: false,
                colspan: 1,
                rowspan: 1,
                optionType: 'manual',
                options: [
                  { id: 'option_1', name: 'Option 1' },
                  { id: 'option_2', name: 'Option 2' }
                ],
                restUrl: null,
                restResponsePath: null,
                restIdProperty: null,
                restLabelProperty: null,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 },
                value: 'empty'
              },
              {
                id: 'Dateandtime0hnmzh',
                name: 'Date and time',
                type: 'datetime',
                readOnly: false,
                required: false,
                colspan: 1,
                rowspan: 1,
                placeholder: null,
                minValue: null,
                maxValue: null,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 },
                dateDisplayFormat: 'YYYY-MM-DD HH:mm',
                value: 1524124122221
              },
              {
                id: 'Text05w7x8',
                name: 'Text',
                type: 'text',
                readOnly: false,
                required: false,
                colspan: 1,
                rowspan: 1,
                placeholder: null,
                minLength: 2,
                maxLength: 6,
                regexPattern: null,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 },
                value: 'text'
              }
            ],
            '2': [
              {
                id: 'Dropdown08qxeg',
                name: 'Dropdown',
                type: 'dropdown',
                readOnly: false,
                required: false,
                colspan: 1,
                rowspan: 1,
                optionType: 'manual',
                options: [
                  { id: 'empty', name: 'Choose one...' },
                  { id: 'option_1', name: 'Item #1' },
                  { id: 'option_2', name: 'Item #2' },
                  { id: 'option_3', name: 'Item #2' }
                ],
                restUrl: null,
                restResponsePath: null,
                restIdProperty: null,
                restLabelProperty: null,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 },
                value: 'empty'
              },
              {
                id: 'Number0dm28l',
                name: 'Number',
                type: 'integer',
                readOnly: false,
                colspan: 1,
                rowspan: 1,
                placeholder: null,
                minValue: 512,
                maxValue: 1024,
                required: false,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 },
                value: 999
              },
              {
                id: 'Checkbox0jjem5',
                name: 'Checkbox',
                type: 'boolean',
                readOnly: false,
                required: false,
                colspan: 1,
                rowspan: 1,
                visibilityCondition: null,
                params: { existingColspan: 1, maxColspan: 2 }
              }
            ]
          }
        }
      ],
      outcomes: [],
      metadata: {},
      variables: []
    }
  }
};
