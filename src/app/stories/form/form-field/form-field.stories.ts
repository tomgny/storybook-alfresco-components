import { AlfrescoApiService, AuthenticationService, CoreModule, FormFieldModel, FormModel } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from '../mock/stub-services';
import { FormFieldComponent } from './form-field.component';

export default {
  component: FormFieldComponent,
  title: 'Core/Components/Form/Form field',
  decorators: [
    moduleMetadata({
      declarations: [FormFieldComponent],
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

const fakeForm = new FormModel();
const amountField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'amount'});
const uploadField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'upload'});
const booleanField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'boolean'});
const dateField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'date'});
const readOnlyTextField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'readonly-text'});
const readOnlyField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'readonly'});
const dropdownField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'dropdown'});
const dynamicTableField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'dynamic-table'});
const functionalGroupField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'functional-group'});
const groupField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'group'});
const hyperlinkField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'hyperlink'});
const multiLineTextField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'multi-line-text'});
const integerField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'integer'});
const peopleField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'people'});
const radioButtonsField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'radio-buttons'});
const textField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'text'});
const typeaheadField = new FormFieldModel(fakeForm, {id: 'fakeField', value: 21, type: 'typeahead'});
const unknownType = new FormFieldModel(fakeForm, {id: 'unknownType',});

const Template: Story<FormFieldComponent> = (args) => ({
  props: args
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  field: amountField
};

export const AmountField = Template.bind({});
AmountField.args = {
  field: amountField
};

export const UploadField = Template.bind({});
UploadField.args = {
  field: uploadField
};

export const BooleanField = Template.bind({});
BooleanField.args = {
  field: booleanField
};

export const DateField = Template.bind({});
DateField.args = {
  field: dateField
};

export const ReadOnlyTextField = Template.bind({});
ReadOnlyTextField.args = {
  field: readOnlyTextField
};

export const ReadOnlyField = Template.bind({});
ReadOnlyField.args = {
  field: readOnlyField
};

export const DropdownField = Template.bind({});
DropdownField.args = {
  field: dropdownField
};

export const DynamicTableField = Template.bind({});
DynamicTableField.args = {
  field: dynamicTableField
};

export const FunctionalGroupField = Template.bind({});
FunctionalGroupField.args = {
  field: functionalGroupField
};

export const GroupField = Template.bind({});
GroupField.args = {
  field: groupField
};

export const HyperlinkField = Template.bind({});
HyperlinkField.args = {
  field: hyperlinkField
};

export const MultiLineTextField = Template.bind({});
MultiLineTextField.args = {
  field: multiLineTextField
};

export const IntegerField = Template.bind({});
IntegerField.args = {
  field: integerField
};

export const PeopleField = Template.bind({});
PeopleField.args = {
  field: peopleField
};

export const RadioButtonsField = Template.bind({});
RadioButtonsField.args = {
  field: radioButtonsField
};

export const TextField = Template.bind({});
TextField.args = {
  field: textField
};

export const TypeaheadField = Template.bind({});
TypeaheadField.args = {
  field: typeaheadField
};

export const UnknownType = Template.bind({});
UnknownType.args = {
  field: unknownType
};

export const Empty = Template.bind({});
Empty.args = {
  field: null
};

