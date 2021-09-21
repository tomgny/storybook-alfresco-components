export const tabVisibilityRefersToSpecificFieldValue: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'text-field',
        leftType: 'field',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextCondition: null,
        nextConditionOperator: ''
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          }
        ]
      }
    }
  ]
};

export const tabVisibilityRefersToSpecificFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'variable-string',
        leftType: 'variable',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextCondition: null,
        nextConditionOperator: ''
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: []
    }
  ],
  variables: [
    {
      id: 'variable-string',
      name: 'Show tab2',
      type: 'string',
      value: 'showTab'
    }
  ]
};

export const tabVisibilityRefersToSpecificFormVariableAndFieldValue: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'variable-string',
        leftType: 'variable',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextConditionOperator: 'and',
        nextCondition: {
          leftFormFieldId: 'text-field',
          leftType: 'field',
          leftValue: null,
          operator: '==',
          rightValue: 'showTab',
          rightType: 'value',
          nextCondition: null,
          nextConditionOperator: ''
        }
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
    {
      id: 'variable-string',
      name: 'Show tab2',
      type: 'string',
      value: 'showTab'
    }
  ]
};

export const tabVisibilityRefersToSpecificFieldValueAndAnotherFieldValue: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'text-field',
        leftType: 'field',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextConditionOperator: 'and',
        nextCondition: {
          leftFormFieldId: 'another-text-field',
          leftType: 'field',
          leftValue: null,
          operator: '==',
          rightValue: 'showTab',
          rightType: 'value',
          nextConditionOperator: '',
          nextCondition: null
        }
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          }
        ]
      }
    }
  ]
};

export const tabVisibilityRefersToSpecificFieldValueAndFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'text-field',
        leftType: 'field',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextConditionOperator: 'and',
        nextCondition: {
          leftFormFieldId: 'variable-string',
          leftType: 'variable',
          leftValue: null,
          operator: '==',
          rightValue: 'showTab',
          rightType: 'value',
          nextCondition: null,
          nextConditionOperator: ''
        }
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          }
        ]
      }
    }
  ],
  variables: [
    {
      id: 'variable-string',
      name: 'Show tab2',
      type: 'string',
      value: 'showTab'
    }
  ]
};

export const tabVisibilityRefersToSpecificFormVariableAndAnotherFormVariable: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'variable-string',
        leftType: 'variable',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextConditionOperator: 'and',
        nextCondition: {
          leftFormFieldId: 'another-variable-string',
          leftType: 'variable',
          leftValue: null,
          operator: '==',
          rightValue: 'showTab2',
          rightType: 'value',
          nextConditionOperator: '',
          nextCondition: null
        }
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: []
    }
  ],
  variables: [
    {
      id: 'variable-string',
      name: 'Show tab2',
      type: 'string',
      value: 'showTab'
    },
    {
      id: 'another-variable-string',
      name: 'Another show tab2',
      type: 'string',
      value: 'showTab2'
    }
  ]
};

export const tabVisibilityRefersToMultipleFieldValues: any = {
  id: '9999',
  name: 'FORM_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:  9:  9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  tabs: [
    {
      id: 'tab1',
      title: 'First tab',
      visibilityCondition: null
    },
    {
      id: 'tab2',
      title: 'Second tab',
      visibilityCondition: {
        leftFormFieldId: 'text-field',
        leftType: 'field',
        leftValue: null,
        operator: '==',
        rightValue: 'showTab',
        rightType: 'value',
        nextConditionOperator: 'and',
        nextCondition: {
          leftFormFieldId: 'another-text-field',
          leftType: 'field',
          leftValue: null,
          operator: '==',
          rightValue: 'showTab2',
          rightType: 'value',
          nextConditionOperator: 'and',
          nextCondition: {
            leftFormFieldId: 'second-another-text-field',
            leftType: 'field',
            leftValue: null,
            operator: '==',
            rightValue: 'showTab3',
            rightType: 'value',
            nextConditionOperator: '',
            nextCondition: null
          }
        }
      }
    }
  ],
  fields: [
    {
      fieldType: 'ContainerRepresentation',
      id: '000000000000000000',
      name: 'Label',
      type: 'container',
      value: null,
      numberOfColumns: 1,
      tab: 'tab1',
      fields: {
        1: [
          {
            fieldType: 'FormFieldRepresentation',
            id: 'text-field',
            name: 'Text field',
            type: 'text',
            value: 'showTab',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'showTab2',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'second-another-text-field',
            name: 'Second another text field',
            type: 'text',
            value: 'showTab3',
            visibilityCondition: null,
            isVisible: true
          }
        ]
      }
    }
  ]
};
