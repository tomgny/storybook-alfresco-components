import { ContentModule, ContentNodeSelectorModule, DocumentListModule } from '@alfresco/adf-content-services';
import {
  AlfrescoApiService,
  AuthenticationService,
  CoreModule,
  FormService,
  MaterialModule,
  NodesApiService,
  SitesService
} from '@alfresco/adf-core';
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
  fileViewerField,
  documentField,
  jsonField,
  typeaheadField,
  dateTimeField,
  containerField
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
        { provide: SitesService, useClass: SitesServiceStub }
      ]
    })
  ],
  argTypes: { limitWidth: { table: { disable: true } } }
} as Meta;

const Template: Story<FormFieldComponent> = (args) => ({
  props: args
});

export const Amount = Template.bind({});
Amount.args = {
  field: amountField
};

export const Upload = Template.bind({});
Upload.args = {
  field: uploadField
};

export const Boolean = Template.bind({});
Boolean.args = {
  field: booleanField
};

export const Date = Template.bind({});
Date.args = {
  field: dateField
};

export const DateTime = Template.bind({});
DateTime.args = {
  field: dateTimeField
};

export const ReadOnlyText = Template.bind({});
ReadOnlyText.args = {
  field: readOnlyTextField
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  field: readOnlyField
};

export const FileViewer = Template.bind({});
FileViewer.args = {
  field: fileViewerField
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  field: dropdownField
};

export const DynamicTable = Template.bind({});
DynamicTable.args = {
  field: dynamicTableField
};

export const FunctionalGroup = Template.bind({});
FunctionalGroup.args = {
  field: functionalGroupField
};

export const Group = Template.bind({});
Group.args = {
  field: groupField
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  field: hyperlinkField
};

export const MultiLineText = Template.bind({});
MultiLineText.args = {
  field: multiLineTextField
};

export const Integer = Template.bind({});
Integer.args = {
  field: integerField
};

export const People = Template.bind({});
People.args = {
  field: peopleField
};

export const RadioButtons = Template.bind({});
RadioButtons.args = {
  field: radioButtonsField
};

export const Text = Template.bind({});
Text.args = {
  field: textField
};

export const Document = Template.bind({});
Document.args = {
  field: documentField,
  limitWidth: true
};

export const JSON = Template.bind({});
JSON.args = {
  field: jsonField
};

export const Typeahead = Template.bind({});
Typeahead.args = {
  field: typeaheadField
};

export const Container = Template.bind({});
Container.args = {
  field: containerField
};

export const Unknown = Template.bind({});
Unknown.args = {
  field: unknownType
};

export const Empty = Template.bind({});
Empty.args = {
  field: null
};
