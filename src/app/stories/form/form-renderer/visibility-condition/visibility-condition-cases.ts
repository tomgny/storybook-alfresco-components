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
          'name': 'Show checkbox',
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
          'name': 'Show checkbox',
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
          'name': 'Show checkbox',
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
          'name': 'Show checkbox',
          'type': 'string',
          'value': 'showCheckbox'
      },
      {
        'id': 'variable-number',
        'name': 'Some number',
        'type': 'number',
        'value': 100
    },
  ]
};

export const checkboxVisibilityRefersToCheckbox: any = {
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
				id: 'another-checkbox',
				name: 'Checkbox',
				type: 'boolean',
				value: true,
				visibilityCondition: null
			},
			{
			  fieldType: 'FormFieldRepresentation',
			  id: 'checkbox',
			  name: 'Checkbox',
			  type: 'boolean',
			  value: false,
			  visibilityCondition: {
          leftFormFieldId: 'another-checkbox',
          leftType: 'field',
          leftValue: null,
          operator: '==',
          rightValue: true,
          rightType: 'value',
          nextConditionOperator: '',
          nextCondition: null
			  },
			  isVisible: true
			}
		  ]
		}
	  }
	]
};

export const checkboxVisibilityRefersToFieldOrAnotherField: any = {
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
            value: 'show',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'checkbox',
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
              rightValue: 'show',
              rightType: 'value',
              nextConditionOperator: 'or',
              nextCondition: {
                leftFormFieldId: 'another-text-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 'checkbox',
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

export const textVisibilityRefersToFieldOrNotAnotherField: any = {
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
            value: 'show',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'checkbox',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'not-text-field',
            name: 'Not text field',
            type: 'text',
            value: '(Text field equals \'show\') or (Another text field not equals \'checkbox\')',
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'show',
              rightType: 'value',
              nextConditionOperator: 'or-not',
              nextCondition: {
                leftFormFieldId: 'another-text-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 'checkbox',
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

export const formVariableValueVisibilityRefersToNoVisibilityConditions: any = {
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
            id: 'display-variable',
            name: 'Display variable',
            type: 'readonly',
            value: 'No cats',
            restIdPropert: 'variable-string',
            visibilityCondition: {

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
        'name': 'Some string',
        'type': 'string',
        'value': 'No cats'
    },
  ]
};

export const displayTextVisibilityRefersToFormVariableAndField: any = {
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
            value: 'cat',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'display-text',
            name: 'Text widget',
            type: 'readonly-text',
            value: 'I\'m visible!',
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'cat',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'variable-string',
                leftType: 'variable',
                leftValue: null,
                operator: '==',
                rightValue: 'dog',
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
          'name': 'Some string',
          'type': 'string',
          'value': 'dog'
      },
  ]
};

export const displayTextVisibilityRefersToFieldOrAnotherField: any = {
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
            value: 'dog',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'another-text-field',
            name: 'Another text field',
            type: 'text',
            value: 'cat',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'display-text',
            name: 'Text widget',
            type: 'readonly-text',
            value: 'I\'m visible!',
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'dog',
              rightType: 'value',
              nextConditionOperator: 'or',
              nextCondition: {
                leftFormFieldId: 'another-text-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 'cat',
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

export const dropdownVisibilityRefersToMultipleFields: any = {
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
            value: 'text',
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'integer-field',
            name: 'Another text field',
            type: 'integer',
            value: 999,
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'amount-field',
            name: 'Another text field',
            type: 'amount',
            value: 999,
            visibilityCondition: null,
            isVisible: true
          },
          {
            fieldType: 'FormFieldRepresentation',
            id: 'dropdown',
            name: 'Dropdown',
            type: 'dropdown',
            value: '1',
            options: [
              { id: '1', name: 'Item #1' },
              { id: '2', name: 'Item #2' },
              { id: '3', name: 'Item #3' }
            ],
            visibilityCondition: {
              leftFormFieldId: 'text-field',
              leftType: 'field',
              leftValue: null,
              operator: '==',
              rightValue: 'text',
              rightType: 'value',
              nextConditionOperator: 'and',
              nextCondition: {
                leftFormFieldId: 'integer-field',
                leftType: 'field',
                leftValue: null,
                operator: '==',
                rightValue: 999,
                rightType: 'value',
                nextConditionOperator: 'or',
                nextCondition: {
                  leftFormFieldId: 'amount-field',
                  leftType: 'field',
                  leftValue: null,
                  operator: '==',
                  rightFormFieldId: 'integer-field',
                  rightType: 'field',
                  nextConditionOperator: '',
                  nextCondition: null
                },
              },
            },
            isVisible: true
          }
        ]
      }
    }
  ]
};

export const dropdownVisibilityRefersToFormVariableAndAnotherFormVariable: any = {
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
            id: 'dropdown',
            name: 'Dropdown',
            type: 'dropdown',
            value: '1',
            options: [
              { id: '1', name: 'Item #1' },
              { id: '2', name: 'Item #2' },
              { id: '3', name: 'Item #3' }
            ],
            visibilityCondition: {
              leftFormFieldId: 'variable-string',
              leftType: 'variable',
              leftValue: null,
              operator: '==',
              rightValue: 'showDropdown',
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
          'name': 'Show dropdown',
          'type': 'string',
          'value': 'showDropdown'
      },
      {
        'id': 'variable-number',
        'name': 'Some number',
        'type': 'number',
        'value': 100
    },
  ]
};
