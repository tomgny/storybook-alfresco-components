import { ContentModule } from '@alfresco/adf-content-services';
import {
  AlfrescoApiService,
  AuthenticationService,
  ContentService,
  CoreModule,
  MaterialModule,
  NodesApiService,
  UploadService
} from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, ContentServiceStub, NodesApiServiceStub } from './mock/stub-services';
import { UploadServiceProgressStub } from './mock/stub-upload-service-progress';
import { UploadButtonComponent } from './upload-button.component';

export default {
  component: UploadButtonComponent,
  title: 'Content Services/Components/Upload Button/Progress state',
  decorators: [
    moduleMetadata({
      declarations: [UploadButtonComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: ContentService, useClass: ContentServiceStub },
        { provide: UploadService, useClass: UploadServiceProgressStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub }
      ]
    })
  ],
  argTypes: {
    file: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    onError: { table: { disable: true } },
    onUploadPermissionFailed: { table: { disable: true } }
  }
} as Meta;

const Template: Story<UploadButtonComponent> = (args) => ({
  props: {
    ...args
  }
});

export const ProgressUpload = Template.bind({});
ProgressUpload.args = {
  acceptedFilesType: '*',
  comment: 'default',
  disabled: false,
  file: undefined,
  majorVersion: false,
  maxFilesSize: undefined,
  multipleFiles: false,
  nodeType: 'cm:content',
  rootFolderId: 'fake_node_with_create_permission',
  staticTitle: undefined,
  tooltip: undefined,
  uploadFolders: false,
  versioning: false
};

export const ProgressMultipleUploadState = Template.bind({});
ProgressMultipleUploadState.args = {
  ...ProgressUpload.args,
  multipleFiles: true
};

export const ProgressFailFolderUploadState = Template.bind({});
ProgressFailFolderUploadState.args = {
  ...ProgressUpload.args,
  uploadFolders: true
};
