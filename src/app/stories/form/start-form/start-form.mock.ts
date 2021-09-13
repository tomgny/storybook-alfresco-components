export let startMockForm = {
  id: 4,
  name: 'Claim Review Process',
  processDefinitionId: 'ClaimReviewProcess:2: 93',
  processDefinitionName: 'ClaimReviewProcess',
  processDefinitionKey: 'ClaimReviewProcess',
  tabs: [],
  fields: [
      {
          fieldType: 'ContainerRepresentation',
          id: 1497953253784,
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
          hasEmptyValue: null,
          options: null,
          restUrl: null,
          restResponsePath: null,
          restIdProperty: null,
          restLabelProperty: null,
          tab: null,
          className: null,
          dateDisplayFormat: null,
          layout: null,
          sizeX: 2,
          sizeY: 1,
          row: -1,
          col: -1,
          visibilityCondition: null,
          numberOfColumns: 2,
          fields: {
              1: [
                  {
                      fieldType: 'FormFieldRepresentation',
                      id: 'clientname',
                      name: 'Client Name',
                      type: 'text',
                      value: 'Fake client',
                      required: true,
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
                      hasEmptyValue: null,
                      options: null,
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: null,
                      params: {
                          existingColspan: 1,
                          maxColspan: 2
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null
                  }
              ],
              2: [
                  {
                      fieldType: 'FormFieldRepresentation',
                      id: 'policyno',
                      name: 'Policy No',
                      type: 'integer',
                      value: 1234567890,
                      required: true,
                      readOnly: false,
                      overrideId: false,
                      colspan: 1,
                      placeholder: 'Enter Policy Name',
                      minLength: 0,
                      maxLength: 0,
                      minValue: null,
                      maxValue: null,
                      regexPattern: null,
                      optionType: null,
                      hasEmptyValue: null,
                      options: null,
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: null,
                      params: {
                          existingColspan: 1,
                          maxColspan: 1
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null
                  }
              ]
          }
      },
      {
          fieldType: 'ContainerRepresentation',
          id: 1497953270269,
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
          hasEmptyValue: null,
          options: null,
          restUrl: null,
          restResponsePath: null,
          restIdProperty: null,
          restLabelProperty: null,
          tab: null,
          className: null,
          dateDisplayFormat: null,
          layout: null,
          sizeX: 2,
          sizeY: 1,
          row: -1,
          col: -1,
          visibilityCondition: null,
          numberOfColumns: 2,
          fields: {
              1: [
                  {
                      fieldType: 'FormFieldRepresentation',
                      id: 'billAmount',
                      name: 'Bill Amount',
                      type: 'integer',
                      value: 999,
                      required: true,
                      readOnly: false,
                      overrideId: false,
                      colspan: 1,
                      placeholder: 'Enter Bill Amount',
                      minLength: 0,
                      maxLength: 0,
                      minValue: null,
                      maxValue: null,
                      regexPattern: null,
                      optionType: null,
                      hasEmptyValue: null,
                      options: null,
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: null,
                      params: {
                          existingColspan: 1,
                          maxColspan: 2
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null
                  }
              ],
              2: [
                  {
                      fieldType: 'FormFieldRepresentation',
                      id: 'billdate',
                      name: 'Bill Date',
                      type: 'date',
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
                      hasEmptyValue: null,
                      options: null,
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: 'billdate',
                      params: {
                          existingColspan: 1,
                          maxColspan: 1
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null
                  }
              ]
          }
      },
      {
          fieldType: 'ContainerRepresentation',
          id: 1497953280930,
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
          hasEmptyValue: null,
          options: null,
          restUrl: null,
          restResponsePath: null,
          restIdProperty: null,
          restLabelProperty: null,
          tab: null,
          className: null,
          dateDisplayFormat: null,
          layout: null,
          sizeX: 2,
          sizeY: 1,
          row: -1,
          col: -1,
          visibilityCondition: null,
          numberOfColumns: 2,
          fields: {
              1: [
                  {
                      fieldType: 'RestFieldRepresentation',
                      id: 'claimtype',
                      name: 'Claim Type',
                      type: 'dropdown',
                      value: 'Choose one...',
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
                      hasEmptyValue: true,
                      options: [
                          {
                              id: 'empty',
                              name: 'Chooseone...'
                          },
                          {
                              id: 'cashless',
                              name: 'Cashless'
                          },
                          {
                              id: 'reimbursement',
                              name: 'Reimbursement'
                          }
                      ],
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: null,
                      params: {
                          existingColspan: 1,
                          maxColspan: 2
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null,
                      endpoint: null,
                      requestHeaders: null
                  }
              ],
              2: [
                  {
                      fieldType: 'FormFieldRepresentation',
                      id: 'hospitalName',
                      name: 'Hospital Name',
                      type: 'text',
                      value: null,
                      required: false,
                      readOnly: false,
                      overrideId: false,
                      colspan: 1,
                      placeholder: 'Enter Hospital Name',
                      minLength: 0,
                      maxLength: 0,
                      minValue: null,
                      maxValue: null,
                      regexPattern: null,
                      optionType: null,
                      hasEmptyValue: null,
                      options: null,
                      restUrl: null,
                      restResponsePath: null,
                      restIdProperty: null,
                      restLabelProperty: null,
                      tab: null,
                      className: null,
                      params: {
                          existingColspan: 1,
                          maxColspan: 1
                      },
                      dateDisplayFormat: null,
                      layout: {
                          row: -1,
                          column: -1,
                          colspan: 1
                      },
                      sizeX: 1,
                      sizeY: 1,
                      row: -1,
                      col: -1,
                      visibilityCondition: null
                  }
              ]
          }
      }
  ],
  outcomes: [
      {
          id: 'approve',
          name: 'Approve'
      },
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
