import { AlfrescoApiService, AuthenticationService, CoreModule, FormModel, FormValues } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { amountField, integerField, textField } from '../form-field/form-field.models';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from '../mock/stub-services';
import { FormRendererComponent } from './form-renderer.component';

export default {
  component: FormRendererComponent,
  title: 'Core/Components/Form/Form renderer',
  decorators: [
    moduleMetadata({
      declarations: [FormRendererComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        // { provide: FormService, useClass: FormServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<FormRendererComponent> = (args) => ({
  props: args
});


// const defaultJSON =  {
//   "id": "amountField",
//   "value": 512,
//   "type": "amount",
//   "name": "Amount",
//   "minValue": "0",
//   "maxValue": "1024"
// }

// const textWidgetVisibility = {
//   formRepresentation: {
//       id: 'form-2604b12b-f0b9-4633-9eae-aa24b659f98e',
//       name: 'TextVisibility',
//       description: '',
//       version: 0,
//       formDefinition: {
//           tabs: [],
//           fields: [
//               {
//                   id: 'c5fa3358-c6b6-46b1-81cf-c8909150ed4c',
//                   name: 'Label',
//                   type: 'container',
//                   tab: null,
//                   numberOfColumns: 2,
//                   fields: {
//                       '1': [
//                           {
//                               id: 'textOne',
//                               name: 'textOne',
//                               type: 'text',
//                               required: false,
//                               colspan: 1,
//                               placeholder: null,
//                               minLength: 0,
//                               maxLength: 0,
//                               regexPattern: null,
//                               visibilityCondition: {},
//                               params: { existingColspan: 1, maxColspan: 2 }
//                           }
//                       ],
//                       '2': [
//                           {
//                               id: 'textTwo',
//                               name: 'textTwo',
//                               type: 'text',
//                               required: false,
//                               colspan: 1,
//                               placeholder: null,
//                               minLength: 0,
//                               maxLength: 0,
//                               regexPattern: null,
//                               visibilityCondition: {
//                                   leftFormFieldId: 'textOne',
//                                   leftRestResponseId: '',
//                                   operator: '==',
//                                   rightValue: 'Test',
//                                   rightType: null,
//                                   rightFormFieldId: '',
//                                   rightRestResponseId: '',
//                                   nextConditionOperator: ''
//                               },
//                               params: { existingColspan: 1, maxColspan: 2 }
//                           }
//                       ]
//                   }
//               },
//               {
//                   id: '7a7734e1-af6c-4ea4-adcb-76725c0544db',
//                   name: 'Label',
//                   type: 'container',
//                   tab: null,
//                   numberOfColumns: 2,
//                   fields: {
//                       '1': [
//                           {
//                               id: 'textThree',
//                               name: 'textThree',
//                               type: 'text',
//                               required: false,
//                               colspan: 1,
//                               placeholder: null,
//                               minLength: 0,
//                               maxLength: 0,
//                               regexPattern: null,
//                               visibilityCondition: {
//                                   leftFormFieldId: 'textOne',
//                                   leftRestResponseId: '',
//                                   operator: '==',
//                                   rightValue: 'Test',
//                                   rightType: null,
//                                   rightFormFieldId: '',
//                                   rightRestResponseId: '',
//                                   nextConditionOperator: 'and',
//                                   nextCondition: {
//                                       leftFormFieldId: 'textTwo',
//                                       leftRestResponseId: '',
//                                       operator: 'empty',
//                                       rightValue: '',
//                                       rightType: null,
//                                       rightFormFieldId: '',
//                                       rightRestResponseId: '',
//                                       nextConditionOperator: ''
//                                   }
//                               },
//                               params: { existingColspan: 1, maxColspan: 2 }
//                           }
//                       ],
//                       '2': [
//                           {
//                               id: 'textFour',
//                               name: 'textFour',
//                               type: 'text',
//                               required: false,
//                               colspan: 1,
//                               placeholder: null,
//                               minLength: 0,
//                               maxLength: 0,
//                               regexPattern: null,
//                               visibilityCondition: {
//                                   leftFormFieldId: 'textOne',
//                                   leftRestResponseId: '',
//                                   operator: 'empty',
//                                   rightValue: '',
//                                   rightType: null,
//                                   rightFormFieldId: '',
//                                   rightRestResponseId: '',
//                                   nextConditionOperator: 'or',
//                                   nextCondition: {
//                                       leftFormFieldId: 'textTwo',
//                                       leftRestResponseId: '',
//                                       operator: '==',
//                                       rightValue: '',
//                                       rightType: null,
//                                       rightFormFieldId: 'textOne',
//                                       rightRestResponseId: '',
//                                       nextConditionOperator: '',
//                                       nextCondition: null
//                                   }
//                               },
//                               params: { existingColspan: 1, maxColspan: 2 }
//                           }
//                       ]
//                   }
//               }
//           ],
//           outcomes: [],
//           metadata: {},
//           variables: []
//       }
//   }
// };

export const test = {
  "formRepresentation": {
      "id": 3003,
      "name": "demo-01",
      "taskId": "7501",
      "taskName": "Demo Form 01",
      "className": "",
      "tabs": [
          {
              "id": "tab1",
              "title": "Text",
              "visibilityCondition": null
          },
          {
              "id": "tab2",
              "title": "Misc",
              "visibilityCondition": null
          }
      ],
      "fields": [
          {
              "fieldType": "ContainerRepresentation",
              "id": "1488274019966",
              "name": "Label",
              "type": "container",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": null,
              "className": null,
              "dateDisplayFormat": null,
              "layout": null,
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [],
                  "2": []
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section4",
              "name": "Section 4",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab2",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label8",
                          "name": "Label8",
                          "type": "people",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label13",
                          "name": "Label13",
                          "type": "functional-group",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label18",
                          "name": "Label18",
                          "type": "readonly",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label19",
                          "name": "Label19",
                          "type": "readonly-text",
                          "value": "Display text as part of the form",
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "HyperlinkRepresentation",
                          "id": "label15",
                          "name": "Label15",
                          "type": "hyperlink",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "hyperlinkUrl": "www.google.com",
                          "displayText": null
                      },
                      {
                          "fieldType": "AttachFileFieldRepresentation",
                          "id": "label16",
                          "name": "Label16",
                          "type": "upload",
                          "value": [],
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1,
                              "fileSource": {
                                  "serviceId": "all-file-sources",
                                  "name": "All file sources"
                              }
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "metaDataColumnDefinitions": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label17",
                          "name": "Label17",
                          "type": "select-folder",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1,
                              "folderSource": {
                                  "serviceId": "alfresco-1",
                                  "name": "Alfresco 5.2 Local",
                                  "metaDataAllowed": true
                              }
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ]
              }
          },
          {
              "fieldType": "DynamicTableRepresentation",
              "id": "label14",
              "name": "Label14",
              "type": "dynamic-table",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab2",
              "className": null,
              "params": {
                  "existingColspan": 1,
                  "maxColspan": 1
              },
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 2,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "columnDefinitions": [
                  {
                      "id": "id",
                      "name": "id",
                      "type": "String",
                      "value": null,
                      "optionType": null,
                      "options": null,
                      "restResponsePath": null,
                      "restUrl": null,
                      "restIdProperty": null,
                      "restLabelProperty": null,
                      "amountCurrency": null,
                      "amountEnableFractions": false,
                      "required": true,
                      "editable": true,
                      "sortable": true,
                      "visible": true,
                      "endpoint": null,
                      "requestHeaders": null
                  },
                  {
                      "id": "name",
                      "name": "name",
                      "type": "String",
                      "value": null,
                      "optionType": null,
                      "options": null,
                      "restResponsePath": null,
                      "restUrl": null,
                      "restIdProperty": null,
                      "restLabelProperty": null,
                      "amountCurrency": null,
                      "amountEnableFractions": false,
                      "required": true,
                      "editable": true,
                      "sortable": true,
                      "visible": true,
                      "endpoint": null,
                      "requestHeaders": null
                  }
              ]
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section1",
              "name": "Section 1",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label1",
                          "name": "Label1",
                          "type": "text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label3",
                          "name": "Label3",
                          "type": "text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label2",
                          "name": "Label2",
                          "type": "multi-line-text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 2,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ]
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section2",
              "name": "Section 2",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label4",
                          "name": "Label4",
                          "type": "integer",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label7",
                          "name": "Label7",
                          "type": "date",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label5",
                          "name": "Label5",
                          "type": "boolean",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label6",
                          "name": "Label6",
                          "type": "boolean",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "AmountFieldRepresentation",
                          "id": "label11",
                          "name": "Label11",
                          "type": "amount",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": "10",
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "enableFractions": false,
                          "currency": null
                      }
                  ]
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section3",
              "name": "Section 3",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label9",
                          "name": "Label9",
                          "type": "dropdown",
                          "value": "Choose one...",
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": true,
                          "options": [
                              {
                                  "id": "empty",
                                  "name": "Choose one..."
                              }
                          ],
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      },
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label12",
                          "name": "Label12",
                          "type": "radio-buttons",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": [
                              {
                                  "id": "option_1",
                                  "name": "Option 1"
                              },
                              {
                                  "id": "option_2",
                                  "name": "Option 2"
                              }
                          ],
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label10",
                          "name": "Label10",
                          "type": "typeahead",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      }
                  ]
              }
          }
      ],
      "outcomes": [],
      "javascriptEvents": [],
      "style": "",
      "customFieldTemplates": {},
      "metadata": {},
      "variables": [
          {
              "id": "bfca9766-7bc1-45cc-8ecf-cdad551e36e2",
              "name": "name1",
              "type": "string",
              "value": ""
          },
          {
              "id": "3ed9f28a-dbae-463f-b991-47ef06658bb6",
              "name": "name2",
              "type": "string",
              "value": ""
          },
          {
              "id": "a7710978-1e9c-4b54-a19c-c6267d2b19a2",
              "name": "input02",
              "type": "integer"
          }
      ],
      "gridsterForm": false,
      "globalDateFormat": "D-M-YYYY"
  }
}

export const adfForm = {
  "formRepresentation": {
      "id": 3003,
      "name": "demo-01",
      "taskId": "7501",
      "taskName": "Demo Form 01",
      "tabs": [
          {
              "id": "tab1",
              "title": "Text",
              "visibilityCondition": null
          },
          {
              "id": "tab2",
              "title": "Misc",
              "visibilityCondition": null
          }
      ],
      "fields": [
          {
              "fieldType": "ContainerRepresentation",
              "id": "1488274019966",
              "name": "Label",
              "type": "container",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": null,
              "className": null,
              "dateDisplayFormat": null,
              "layout": null,
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [],
                  "2": []
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section4",
              "name": "Section 4",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab2",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label8",
                          "name": "Label8",
                          "type": "people",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label13",
                          "name": "Label13",
                          "type": "functional-group",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label18",
                          "name": "Label18",
                          "type": "readonly",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label19",
                          "name": "Label19",
                          "type": "readonly-text",
                          "value": "Display text as part of the form",
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "HyperlinkRepresentation",
                          "id": "label15",
                          "name": "Label15",
                          "type": "hyperlink",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "hyperlinkUrl": "www.google.com",
                          "displayText": null
                      },
                      {
                          "fieldType": "AttachFileFieldRepresentation",
                          "id": "label16",
                          "name": "Label16",
                          "type": "upload",
                          "value": [],
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1,
                              "fileSource": {
                                  "serviceId": "all-file-sources",
                                  "name": "All file sources"
                              }
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "metaDataColumnDefinitions": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label17",
                          "name": "Label17",
                          "type": "select-folder",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab2",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1,
                              "folderSource": {
                                  "serviceId": "alfresco-1",
                                  "name": "Alfresco 5.2 Local",
                                  "metaDataAllowed": true
                              }
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ]
              }
          },
          {
              "fieldType": "DynamicTableRepresentation",
              "id": "label14",
              "name": "Label14",
              "type": "dynamic-table",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab2",
              "className": null,
              "params": {
                  "existingColspan": 1,
                  "maxColspan": 1
              },
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 2,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "columnDefinitions": [
                  {
                      "id": "id",
                      "name": "id",
                      "type": "String",
                      "value": null,
                      "optionType": null,
                      "options": null,
                      "restResponsePath": null,
                      "restUrl": null,
                      "restIdProperty": null,
                      "restLabelProperty": null,
                      "amountCurrency": null,
                      "amountEnableFractions": false,
                      "required": true,
                      "editable": true,
                      "sortable": true,
                      "visible": true,
                      "endpoint": null,
                      "requestHeaders": null
                  },
                  {
                      "id": "name",
                      "name": "name",
                      "type": "String",
                      "value": null,
                      "optionType": null,
                      "options": null,
                      "restResponsePath": null,
                      "restUrl": null,
                      "restIdProperty": null,
                      "restLabelProperty": null,
                      "amountCurrency": null,
                      "amountEnableFractions": false,
                      "required": true,
                      "editable": true,
                      "sortable": true,
                      "visible": true,
                      "endpoint": null,
                      "requestHeaders": null
                  }
              ]
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section1",
              "name": "Section 1",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label1",
                          "name": "Label1",
                          "type": "text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label3",
                          "name": "Label3",
                          "type": "text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label2",
                          "name": "Label2",
                          "type": "multi-line-text",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 2,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ]
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section2",
              "name": "Section 2",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label4",
                          "name": "Label4",
                          "type": "integer",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label7",
                          "name": "Label7",
                          "type": "date",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label5",
                          "name": "Label5",
                          "type": "boolean",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "FormFieldRepresentation",
                          "id": "label6",
                          "name": "Label6",
                          "type": "boolean",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null
                      },
                      {
                          "fieldType": "AmountFieldRepresentation",
                          "id": "label11",
                          "name": "Label11",
                          "type": "amount",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": "10",
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "enableFractions": false,
                          "currency": null
                      }
                  ]
              }
          },
          {
              "fieldType": "ContainerRepresentation",
              "id": "section3",
              "name": "Section 3",
              "type": "group",
              "value": null,
              "required": false,
              "readOnly": false,
              "overrideId": false,
              "colspan": 1,
              "placeholder": null,
              "minLength": 0,
              "maxLength": 0,
              "minValue": null,
              "maxValue": null,
              "regexPattern": null,
              "optionType": null,
              "hasEmptyValue": null,
              "options": null,
              "restUrl": null,
              "restResponsePath": null,
              "restIdProperty": null,
              "restLabelProperty": null,
              "tab": "tab1",
              "className": null,
              "dateDisplayFormat": null,
              "layout": {
                  "row": -1,
                  "column": -1,
                  "colspan": 2
              },
              "sizeX": 2,
              "sizeY": 1,
              "row": -1,
              "col": -1,
              "visibilityCondition": null,
              "numberOfColumns": 2,
              "fields": {
                  "1": [
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label9",
                          "name": "Label9",
                          "type": "dropdown",
                          "value": "Choose one...",
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": true,
                          "options": [
                              {
                                  "id": "empty",
                                  "name": "Choose one..."
                              }
                          ],
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      },
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label12",
                          "name": "Label12",
                          "type": "radio-buttons",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": [
                              {
                                  "id": "option_1",
                                  "name": "Option 1"
                              },
                              {
                                  "id": "option_2",
                                  "name": "Option 2"
                              }
                          ],
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 2
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      }
                  ],
                  "2": [
                      {
                          "fieldType": "RestFieldRepresentation",
                          "id": "label10",
                          "name": "Label10",
                          "type": "typeahead",
                          "value": null,
                          "required": false,
                          "readOnly": false,
                          "overrideId": false,
                          "colspan": 1,
                          "placeholder": null,
                          "minLength": 0,
                          "maxLength": 0,
                          "minValue": null,
                          "maxValue": null,
                          "regexPattern": null,
                          "optionType": null,
                          "hasEmptyValue": null,
                          "options": null,
                          "restUrl": null,
                          "restResponsePath": null,
                          "restIdProperty": null,
                          "restLabelProperty": null,
                          "tab": "tab1",
                          "className": null,
                          "params": {
                              "existingColspan": 1,
                              "maxColspan": 1
                          },
                          "dateDisplayFormat": null,
                          "layout": {
                              "row": -1,
                              "column": -1,
                              "colspan": 1
                          },
                          "sizeX": 1,
                          "sizeY": 1,
                          "row": -1,
                          "col": -1,
                          "visibilityCondition": null,
                          "endpoint": null,
                          "requestHeaders": null
                      }
                  ]
              }
          }
      ],
      "outcomes": [],
      "javascriptEvents": [],
      "className": "",
      "style": "",
      "customFieldTemplates": {},
      "metadata": {},
      "variables": [
          {
              "id": "bfca9766-7bc1-45cc-8ecf-cdad551e36e2",
              "name": "name1",
              "type": "string",
              "value": ""
          },
          {
              "id": "3ed9f28a-dbae-463f-b991-47ef06658bb6",
              "name": "name2",
              "type": "string",
              "value": ""
          },
          {
              "id": "a7710978-1e9c-4b54-a19c-c6267d2b19a2",
              "name": "input02",
              "type": "integer"
          }
      ],
      "gridsterForm": false,
      "globalDateFormat": "D-M-YYYY"
  }
}

export const nextConditionForm: any = {
  id: '9999',
  name: 'FORM_PROCESS_VARIABLE_VISIBILITY',
  processDefinitionId: 'PROCESS_TEST:9:9999',
  processDefinitionName: 'PROCESS_TEST',
  processDefinitionKey: 'PROCESS_TEST',
  taskId: '999',
  taskName: 'TEST',
  fields: [
      {
          'id': '60114002-0da2-4513-ab65-845b4e55d3c8',
          'name': 'Label',
          'type': 'container',
          'tab': null,
          'numberOfColumns': 2,
          'fields': {
              '1': [
                textField, amountField, integerField
              ]
          }
      }
  ]
};

export const formValues: FormValues = {
  "label1": "text",
};

// function parseForm(json: any, data?: FormValues, readOnly: boolean = false, fixedSpace?: boolean): FormModel {
//   if (json) {
//       const form = new FormModel(json, data, readOnly, this, fixedSpace);
//       if (!json.fields) {
//           form.outcomes = [
//               new FormOutcomeModel(<any> form, {
//                   id: '$save',
//                   name: FormOutcomeModel.SAVE_ACTION,
//                   isSystem: true
//               })
//           ];
//       }
//       return form;
//   }
//   return null;
// }


export const defaultForm = new FormModel(nextConditionForm, formValues, false);

export const adfForms = new FormModel(adfForm.formRepresentation, formValues, false);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  showDebugButton: true,
  formDefinition: adfForms
};
