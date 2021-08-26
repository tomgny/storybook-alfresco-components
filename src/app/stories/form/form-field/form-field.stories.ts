import { AlfrescoApiService, AuthenticationService, CoreModule, FormService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, FormServiceStub } from '../mock/stub-services';
import { FormFieldComponent } from './form-field.component';
import { amountField, booleanField, dateField, dropdownField, dynamicTableField, functionalGroupField, groupField, hyperlinkField, integerField, multiLineTextField, peopleField, radioButtonsField, readOnlyField, readOnlyTextField, textField, typeaheadField, unknownType, uploadField } from './form-field.models';

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
        { provide: FormService, useClass: FormServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<FormFieldComponent> = (args) => ({
  props: args
});

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
