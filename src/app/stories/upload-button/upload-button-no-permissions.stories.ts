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
import { AlfrescoApiServiceStub, AuthenticationServiceStub, ContentServiceNoPermissionsStub, NodesApiServiceStub } from './mock/stub-services';
import { UploadServiceStub } from './mock/stub-upload-service';
import { UploadButtonComponent } from './upload-button.component';

export default {
  component: UploadButtonComponent,
  title: 'Upload Button component/No Permissions',
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
        { provide: ContentService, useClass: ContentServiceNoPermissionsStub },
        { provide: UploadService, useClass: UploadServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<UploadButtonComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  acceptedFilesType: '*',
  comment: 'no permissions',
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
