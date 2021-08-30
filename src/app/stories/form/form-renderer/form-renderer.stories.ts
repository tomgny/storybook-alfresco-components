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
        // { provide: FormService },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<FormRendererComponent> = (args) => ({
  props: args
});

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
  "Text1": "test",
};

const easyForm: any = {
  'formRepresentation': {
      'id': 1001,
      'name': 'ISSUE_FORM',
      'tabs': [],
      'fields': [
          {
              'fieldType': 'ContainerRepresentation',
              'id': '1498212398417',
              'name': 'Label',
              'type': 'container',
              'value': null,
              'required': false,
              'readOnly': false,
              'overrideId': false,
              'colspan': 1,
              'placeholder': null,
              'minLength': 0,
              'maxLength': 0,
              'minValue': null,
              'maxValue': null,
              'regexPattern': null,
              'optionType': null,
              'hasEmptyValue': false,
              'options': null,
              'restUrl': null,
              'restResponsePath': null,
              'restIdProperty': null,
              'restLabelProperty': null,
              'tab': null,
              'className': null,
              'dateDisplayFormat': null,
              'sizeX': 2,
              'sizeY': 1,
              'row': -1,
              'col': -1,
              'numberOfColumns': 2,
              'fields': {
                  '1': [
                      {
                          'fieldType': 'RestFieldRepresentation',
                          'id': 'label',
                          'name': 'Label',
                          'type': 'dropdown',
                          'value': 'Choose one...',
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': true,
                          'options': [
                              {
                                  'id': 'empty',
                                  'name': 'Choose one...'
                              },
                              {
                                  'id': 'option_1',
                                  'name': 'test1'
                              },
                              {
                                  'id': 'option_2',
                                  'name': 'test2'
                              },
                              {
                                  'id': 'option_3',
                                  'name': 'test3'
                              }
                          ],
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': null,
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 2
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null,
                          'endpoint': null,
                          'requestHeaders': null
                      },
                      {
                          'fieldType': 'FormFieldRepresentation',
                          'id': 'Date',
                          'name': 'Date',
                          'type': 'date',
                          'value': null,
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': null,
                          'options': null,
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': 'tab1',
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 2
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null
                      },
                      {
                          'fieldType': 'FormFieldRepresentation',
                          'id': 'label5',
                          'name': 'Label5',
                          'type': 'boolean',
                          'value': null,
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': null,
                          'options': null,
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': 'tab1',
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 1
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null
                      },
                      {
                          'fieldType': 'FormFieldRepresentation',
                          'id': 'label6',
                          'name': 'Label6',
                          'type': 'boolean',
                          'value': null,
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': null,
                          'options': null,
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': 'tab1',
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 1
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null
                      },
                      {
                          'fieldType': 'FormFieldRepresentation',
                          'id': 'label4',
                          'name': 'Label4',
                          'type': 'integer',
                          'value': null,
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': null,
                          'options': null,
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': 'tab1',
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 2
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null
                      },
                      {
                          'fieldType': 'RestFieldRepresentation',
                          'id': 'label12',
                          'name': 'Label12',
                          'type': 'radio-buttons',
                          'value': null,
                          'required': false,
                          'readOnly': false,
                          'overrideId': false,
                          'colspan': 1,
                          'placeholder': null,
                          'minLength': 0,
                          'maxLength': 0,
                          'minValue': null,
                          'maxValue': null,
                          'regexPattern': null,
                          'optionType': null,
                          'hasEmptyValue': null,
                          'options': [
                              {
                                  'id': 'option_1',
                                  'name': 'Option 1'
                              },
                              {
                                  'id': 'option_2',
                                  'name': 'Option 2'
                              }
                          ],
                          'restUrl': null,
                          'restResponsePath': null,
                          'restIdProperty': null,
                          'restLabelProperty': null,
                          'tab': 'tab1',
                          'className': null,
                          'params': {
                              'existingColspan': 1,
                              'maxColspan': 2
                          },
                          'dateDisplayFormat': null,
                          'layout': {
                              'row': -1,
                              'column': -1,
                              'colspan': 1
                          },
                          'sizeX': 1,
                          'sizeY': 1,
                          'row': -1,
                          'col': -1,
                          'visibilityCondition': null,
                          'endpoint': null,
                          'requestHeaders': null
                      }
                  ]
              }
          }
      ],
      'outcomes': [],
      'javascriptEvents': [],
      'className': '',
      'style': '',
      'customFieldTemplates': {},
      'metadata': {},
      'variables': [
          {
              'id': 'bfca9766-7bc1-45cc-8ecf-cdad551e36e2',
              'name': 'name1',
              'type': 'string',
              'value': ''
          },
          {
              'id': '3ed9f28a-dbae-463f-b991-47ef06658bb6',
              'name': 'name2',
              'type': 'string',
              'value': ''
          },
          {
              'id': 'a7710978-1e9c-4b54-a19c-c6267d2b19a2',
              'name': 'input02',
              'type': 'integer'
          }
      ],
      'customFieldsValueInfo': {},
      'gridsterForm': false,
      'globalDateFormat': 'D-M-YYYY'
  }
};
//export const adfForms = new FormModel(adfForm, formValues, false);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  showDebugButton: true,
  formDefinition: new FormModel(easyForm, {"Date": Date.now()}, false)
};
