export const taskFormWithRequiredNumberWidgets: any = {
  formRepresentation: {
    id: 1001,
    name: 'Default Test form',
    tabs: [],
    fields: [
      {
        fieldType: 'ContainerRepresentation',
        id: '1498212398417',
        name: 'Label',
        type: 'container',
        value: null,
        required: false,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: false,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        dateDisplayFormat: null,
        sizeX: 2,
        sizeY: 1,
        row: -1,
        col: -1,
        numberOfColumns: 2,
        fields: {
          '1': [
            {
              fieldType: 'RestFieldRepresentation',
              id: 'label1',
              name: 'Label',
              type: 'integer',
              value: 5,
              required: true
            },
            {
              fieldType: 'RestFieldRepresentation',
              id: 'label2',
              name: 'Labe2',
              type: 'integer',
              value: 25,
              required: true
            }
          ]
        }
      }
    ],
    outcomes: [],
    javascriptEvents: [],
    className: '',
    style: '',
    customFieldTemplates: {},
    metadata: {},
    variables: [
      {
        id: 'bfca9766-7bc1-45cc-8ecf-cdad551e36e2',
        name: 'name1',
        type: 'string',
        value: ''
      },
      {
        id: '3ed9f28a-dbae-463f-b991-47ef06658bb6',
        name: 'name2',
        type: 'string',
        value: ''
      },
      {
        id: 'a7710978-1e9c-4b54-a19c-c6267d2b19a2',
        name: 'input02',
        type: 'integer'
      }
    ],
    customFieldsValueInfo: {},
    gridsterForm: false,
    globalDateFormat: 'D-M-YYYY'
  }
};

export const taskFormWithRequiredCheckboxAndVisibilityConditions: any = {
  formRepresentation: {
    id: 1001,
    name: 'Default Test form',
    tabs: [],
    fields: [
      {
        fieldType: 'ContainerRepresentation',
        id: '1498212398417',
        name: 'Label',
        type: 'container',
        value: null,
        required: false,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: false,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        dateDisplayFormat: null,
        sizeX: 2,
        sizeY: 1,
        row: -1,
        col: -1,
        numberOfColumns: 2,
        fields: {
          1: [
            {
              fieldType: 'FormFieldRepresentation',
              id: 'another-checkbox',
              name: 'Checkbox',
              type: 'boolean',
              value: true,
              required: true,
              visibilityCondition: null
            },
            {
              fieldType: 'FormFieldRepresentation',
              id: 'checkbox',
              name: 'Checkbox',
              type: 'boolean',
              value: false,
              required: true,
              visibilityCondition: null,
            }
          ]
        }
      }
    ],
    outcomes: [],
    javascriptEvents: [],
    className: '',
    style: '',
    customFieldTemplates: {},
    metadata: {},
    variables: [
      {
        id: 'bfca9766-7bc1-45cc-8ecf-cdad551e36e2',
        name: 'name1',
        type: 'string',
        value: ''
      },
      {
        id: '3ed9f28a-dbae-463f-b991-47ef06658bb6',
        name: 'name2',
        type: 'string',
        value: ''
      },
      {
        id: 'a7710978-1e9c-4b54-a19c-c6267d2b19a2',
        name: 'input02',
        type: 'integer'
      }
    ],
    customFieldsValueInfo: {},
    gridsterForm: false,
    globalDateFormat: 'D-M-YYYY'
  }
};

export const taskFormModelsArray = {
  'taskFormWithRequiredNumberWidgets': taskFormWithRequiredNumberWidgets.formRepresentation,
  'taskFormWithRequiredCheckboxAndVisibilityConditions': taskFormWithRequiredCheckboxAndVisibilityConditions.formRepresentation
}
