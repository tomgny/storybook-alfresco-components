import { ContentModule, ContentNodeSelectorModule, DocumentListModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, FormService, MaterialModule, NodesApiService, SitesService } from '@alfresco/adf-core';
import { SitesApi } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { SitesApiStub } from '../mock/stub-apis';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, FormServiceStub, NodesApiServiceStub, SitesServiceStub } from '../mock/stub-services';
import { FormFieldComponent } from './form-field.component';
import {
  amountField,
  booleanField,
  dateField,
  dropdownField,
  dynamicTableField,
  functionalGroupField,
  groupField,
  hyperlinkField,
  integerField,
  multiLineTextField,
  peopleField,
  radioButtonsField,
  readOnlyField,
  readOnlyTextField,
  textField,
  unknownType,
  uploadField,
  SelectFolder,
} from './form-field.models';

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
        BrowserAnimationsModule,
        ContentModule.forRoot(),
        MaterialModule,
        ContentNodeSelectorModule,
        DocumentListModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: FormService, useClass: FormServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: SitesApi, useClass: SitesApiStub },
        { provide: SitesService, useClass: SitesServiceStub },
        // { provide: CustomResourcesService, useValue: CustomResourcesServiceStub },
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

export const SelectFolderField = Template.bind({});
SelectFolderField.args = {
  field: SelectFolder
};

export const UnknownType = Template.bind({});
UnknownType.args = {
  field: unknownType
};

export const Empty = Template.bind({});
Empty.args = {
  field: null
};
