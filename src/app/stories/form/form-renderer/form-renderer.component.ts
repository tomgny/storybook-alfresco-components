import { FormFieldModel, FormModel, FormOutcomeModel, FormService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';
import {  selectFolderField } from '../form-field/form-field.models';

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

@Component({
  selector: 'aca-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
  /** Toggle debug options. */
  @Input()
  showDebugButton: boolean = false;

  @Input()
  formDefinition: FormModel;
  debugMode: boolean;

  tmpFormDefinition: FormModel;


  onRefreshClicked(): void {
    throw new Error('Method not implemented.');
  }
  saveTaskForm(): void {
    throw new Error('Method not implemented.');
  }
  completeTaskForm(_outcome?: string): void {
    throw new Error('Method not implemented.');
  }
  protected onTaskSaved(_form: FormModel): void {
    throw new Error('Method not implemented.');
  }
  protected storeFormAsMetadata(): void {
    throw new Error('Method not implemented.');
  }
  protected onExecuteOutcome(_outcome: FormOutcomeModel): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(){


    this.tmpFormDefinition = this.formService.parseForm(easyForm);
    const booleanField = new FormFieldModel(this.tmpFormDefinition, { id: 'Label5', name: 'Checkbox', type: 'boolean' });
    booleanField;
    console.log(this.tmpFormDefinition);
    console.log('fields: ');
    console.log(this.tmpFormDefinition.fields);


    this.tmpFormDefinition.fields = this.formService.parseForm(easyForm).getFormFields();
    this.tmpFormDefinition.fields = [{fieldType: 'text', id: 'test', name: 'test', type: 'text', tab: 'text', form: undefined, json: undefined, field: selectFolderField}]
    console.log(this.tmpFormDefinition.fields);
  }

  constructor(private formService: FormService){}
}
