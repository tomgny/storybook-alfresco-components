export const taskFormWithRequiredNumberWidgets: any = {
  formRepresentation: {
    id: 1001,
    name: 'Should be able to complete a task with a form with required number widgets',
    tabs: [],
    fields: [
      {
        fieldType: 'ContainerRepresentation',
        id: '000000000000000000',
        name: 'Label',
        type: 'container',
        value: null,
        numberOfColumns: 2,
        required: true,
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
    variables: [],
    customFieldsValueInfo: {},
    gridsterForm: false,
    globalDateFormat: 'D-M-YYYY'
  }
};

export const taskFormWithRequiredCheckboxAndVisibilityConditions: any = {
  formRepresentation: {
    id: 1001,
    name: 'Should be able to complete a task with Checkbox widgets',
    tabs: [],
    fields: [
      {
        fieldType: 'ContainerRepresentation',
        id: '000000000000000000',
        name: 'Label',
        type: 'container',
        value: null,
        numberOfColumns: 2,
        required: true,
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
              visibilityCondition: null
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
    variables: [],
    customFieldsValueInfo: {},
    gridsterForm: false,
    globalDateFormat: 'D-M-YYYY'
  }
};

export const processWithRequiredSpecificNumbers = {
  id: 4,
  name: 'Should be able to start a process with visibility condition for number widgets',
  processDefinitionId: 'ClaimReviewProcess:2: 93',
  processDefinitionName: 'ClaimReviewProcess',
  processDefinitionKey: 'ClaimReviewProcess',
  tabs: [],
  fields: [
      {
        fieldType: 'ContainerRepresentation',
        id: '000000000000000000',
        name: 'Label',
        type: 'container',
        value: null,
        numberOfColumns: 1,
        required: true,
        fields: {
              1: [
                {
                  fieldType: 'FormFieldRepresentation',
                  id: 'integer-field',
                  name: 'Number 1',
                  type: 'integer',
                  value: null,
                  minValue: 999,
                  maxValue: 999,
                  visibilityCondition: null,
                  placeholder: 'Type 999',
                  isVisible: true,
                  required: true
                },
              ],
              2: [
                {
                  fieldType: 'FormFieldRepresentation',
                  id: 'integer-second-field',
                  name: 'Number 2',
                  type: 'integer',
                  placeholder: 'Type 123',
                  value: 321,
                  minValue: 123,
                  maxValue: 123,
                  visibilityCondition: {
                    leftFormFieldId: 'integer-field',
                    leftType: 'field',
                    leftValue: null,
                    operator: '==',
                    rightValue: 999,
                    rightType: 'value',
                    nextConditionOperator: null,
                    nextCondition: null
                  },
                  isVisible: true,
                  required: true
                }
              ]
          }
      },
  ],
  outcomes: [
      {
          id: 'complete',
          name: 'Complete'
      },
      {
          id: 'start_process',
          name: 'Start Process'
      }
  ],
  javascriptEvents: [],
  className: '',
  style: '',
  metadata: {},
  variables: [],
  customFieldsValueInfo: {},
  gridsterForm: false,
  globalDateFormat: 'D - M - YYYY'
};

export const processWithRequiredCheckboxes = {
  id: 4,
  name: 'Should be able to complete a process with visibility condition for boolean widgets',
  processDefinitionId: 'ClaimReviewProcess:2: 93',
  processDefinitionName: 'ClaimReviewProcess',
  processDefinitionKey: 'ClaimReviewProcess',
  tabs: [],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox1',
            name: 'Checkbox 1',
            type: 'boolean',
            value: false,
            visibilityCondition: null,
            required: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox2',
            name: 'Checkbox 2',
            type: 'boolean',
            value: false,
            required: true,
            visibilityCondition: {
              leftFormFieldId: 'checkbox1',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: true,
              rightType: 'value',
              nextConditionOperator: '',
              nextCondition: null
            },
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox3',
            name: 'Checkbox 3',
            type: 'boolean',
            value: false,
            required: true,
            visibilityCondition: {
              leftFormFieldId: 'checkbox2',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: true,
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'checkbox1',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: true,
                rightType: 'value',
                nextConditionOperator: '',
                nextCondition: null
              }
            },
            isVisible: true
          }
        ]
      }
    }
  ],
  outcomes: [
      {
          id: 'complete',
          name: 'Complete'
      },
      {
          id: 'start_process',
          name: 'Start Process'
      }
  ],
  javascriptEvents: [],
  className: '',
  style: '',
  metadata: {},
  variables: [],
  customFieldsValueInfo: {},
  gridsterForm: false,
  globalDateFormat: 'D - M - YYYY'
};

export const taskFormModelsArray = {
  taskFormWithRequiredNumberWidgets: taskFormWithRequiredNumberWidgets.formRepresentation,
  taskFormWithRequiredCheckboxAndVisibilityConditions: taskFormWithRequiredCheckboxAndVisibilityConditions.formRepresentation,
  processWithRequiredSpecificNumbers: processWithRequiredSpecificNumbers,
  processWithRequiredCheckboxes: processWithRequiredCheckboxes
};
