export const fakeFormVisibility: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showCheckbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextCondition: null,
              nextConditionOperator: ''
            },
            isVisible: true
          }
        ]
      }
    }
  ]
};

export const checkboxVisibilityRefersToFormVariableAndField: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showCheckbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'variable-string',
                leftType: 'variable',
                leftValue: null,
                operator: '==',
                rightValue: 'showCheckbox',
                rightType: 'value',
                nextCondition: null,
                nextConditionOperator: ''
              },
            },
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
      {
          'id': 'variable-string',
          'name': 'name',
          'type': 'string',
          'value': 'showCheckbox'
      },
  ]
};

export const checkboxVisibilityRefersToFieldAndFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showCheckbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'variable-string',
              leftType: 'variable',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'text-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 'showCheckbox',
                rightType: 'value',
                nextConditionOperator: '',
                nextCondition: null
              },
            },
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
      {
          'id': 'variable-string',
          'name': 'name',
          'type': 'string',
          'value': 'showCheckbox'
      },
  ]
};

export const checkboxVisibilityRefersToFieldAndAnotherField: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showCheckbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'showCheckbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'another-text-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 'showCheckbox',
                rightType: 'value',
                nextConditionOperator: '',
                nextCondition: null,
              },
            },
            isVisible: true
          }
        ]
      }
    }
  ]
};

export const checkboxVisibilityRefersToFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'variable-string',
              leftType: 'variable',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextConditionOperator: '',
              nextCondition: null,
            },
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
      {
          'id': 'variable-string',
          'name': 'name',
          'type': 'string',
          'value': 'showCheckbox'
      },
  ]
};

export const checkboxVisibilityRefersToFormVariableAndAnotherFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
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
            id: 'checkbox',
            name: 'Checkbox',
            type: 'boolean',
            value: false,
            visibilityCondition: {
              leftFormFieldId: 'variable-string',
              leftType: 'variable',
              leftValue: null,
              operator: '==',
              rightValue: 'showCheckbox',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'variable-number',
                leftType: 'variable',
                leftValue: null,
                operator: '==',
                rightValue: 100,
                rightType: 'value',
                nextConditionOperator: '',
                nextCondition: null
              },
            },
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
      {
          'id': 'variable-string',
          'name': 'name',
          'type': 'string',
          'value': 'showCheckbox'
      },
      {
        'id': 'variable-number',
        'name': 'name',
        'type': 'number',
        'value': 100
    },
  ]
};
