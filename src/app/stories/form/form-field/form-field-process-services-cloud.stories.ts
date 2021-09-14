import { ContentModule, ContentNodeSelectorModule, DocumentListModule } from '@alfresco/adf-content-services';
import {
  AlfrescoApiService,
  AuthenticationService,
  CoreModule,
  FormService,
  IdentityGroupService,
  IdentityUserService,
  MaterialModule,
  NodesApiService,
  SitesService
} from '@alfresco/adf-core';
import { ProcessServicesCloudModule } from '@alfresco/adf-process-services-cloud';
import { SitesApi } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { SitesApiStub } from '../mock/stub-apis';
import {
  AlfrescoApiServiceStub,
  AuthenticationServiceStub,
  FormServiceStub,
  IdentityGroupServiceStub,
  IdentityUserServiceStub,
  NodesApiServiceStub,
  SitesServiceStub
} from '../mock/stub-services';
import { FormFieldComponent } from './form-field.component';
import {
  processCloudDateField,
  processCloudDropdownField,
  processCloudFunctionalGroupField,
  processCloudPeopleField,
  processCloudUploadField
} from './form-field.models';

export default {
  component: FormFieldComponent,
  title: 'Core/Components/Form/Form field/Process services cloud',
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
        DocumentListModule,
        ProcessServicesCloudModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: FormService, useClass: FormServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: SitesApi, useClass: SitesApiStub },
        { provide: SitesService, useClass: SitesServiceStub },
        { provide: IdentityUserService, useClass: IdentityUserServiceStub },
        { provide: IdentityGroupService, useClass: IdentityGroupServiceStub }
        // { provide: AuthenticationApi, useClass: AuthenticationApiStub}
      ]
    })
  ]
} as Meta;

const Template: Story<FormFieldComponent> = (args) => ({
  props: args
});

export const Upload = Template.bind({});
Upload.args = {
  field: processCloudUploadField
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  field: processCloudDropdownField
};

export const Date = Template.bind({});
Date.args = {
  field: processCloudDateField
};

export const People = Template.bind({});
People.args = {
  field: processCloudPeopleField
};

export const FunctionalGroup = Template.bind({});
FunctionalGroup.args = {
  field: processCloudFunctionalGroupField
};
