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
import { processUploadField, selectFolderField } from './form-field.models';

export default {
  component: FormFieldComponent,
  title: 'Core/Components/Form/Form field/Process services',
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
  ]
} as Meta;

const Template: Story<FormFieldComponent> = (args) => ({
  props: args
});

export const SelectFolder = Template.bind({});
SelectFolder.args = {
  field: selectFolderField
};

export const ProcessUpload = Template.bind({});
ProcessUpload.args = {
  field: processUploadField
};
