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
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, ContentServiceStub, NodesApiServiceStub } from './mock/stub-services';
import { UploadServiceFailStub } from './mock/stub-upload-service-fail';
import { UploadButtonComponent } from './upload-button.component';

export default {
  component: UploadButtonComponent,
  title: 'Content Services/Components/Upload Button/Fail state',
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
        CommonModule,
        A11yModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: ContentService, useClass: ContentServiceStub },
        { provide: UploadService, useClass: UploadServiceFailStub },
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

export const UploadFailState = Template.bind({});
UploadFailState.args = {
  acceptedFilesType: '*',
  comment: 'fail',
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

export const MultipleUploadFailState = Template.bind({});
MultipleUploadFailState.args = {
  ...UploadFailState.args,
  multipleFiles: true
};

export const FolderUploadFailState = Template.bind({});
FolderUploadFailState.args = {
  ...UploadFailState.args,
  uploadFolders: true
};
