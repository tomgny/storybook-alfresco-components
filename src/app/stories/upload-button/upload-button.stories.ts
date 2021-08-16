import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, ContentService, CoreModule, FileModel, FileUploadOptions, MaterialModule, NodesApiService, UploadService,  } from '@alfresco/adf-core';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, ContentServiceStub, NodesApiServiceStub } from './mock/stub-services';
import { UploadServiceStub } from './mock/stub-upload-service';
import { UploadButtonComponent } from './upload-button.component';

export default {
  component: UploadButtonComponent,
  title: 'Upload Button component',
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
      ]
      ,
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: ContentService, useClass: ContentServiceStub},
        { provide: UploadService, useClass: UploadServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub}
      ]
    })
  ]
} as Meta;

const fakeFile = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
const fakeFileUploadOptions = new FileUploadOptions();
fakeFileUploadOptions.comment = 'fake file';
fakeFileUploadOptions.majorVersion = true;
fakeFileUploadOptions.newVersion = false;
fakeFileUploadOptions.parentId = 'fake_node_with_create_permission';
fakeFileUploadOptions.path = '/fake';
fakeFileUploadOptions.nodeType = 'cm:content';
const fakeFileModel = new FileModel(fakeFile, fakeFileUploadOptions, 'fake_file');

const Template: Story<UploadButtonComponent> = (args) => ({
  props: {
    ...args
  }
})

export const DefaultStory = Template.bind({});
DefaultStory.args = {
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
  tooltip: undefined, //not work
  uploadFolders: false,
  versioning: false,
  fakeSuccess: true,
  fakeError: true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultStory.args,
  disabled: true
}

export const StaticTitle = Template.bind({});
StaticTitle.args = {
  ...DefaultStory.args,
  staticTitle: 'Static Custom Title'
}

export const UploadFolder = Template.bind({});
UploadFolder.args = {
  ...DefaultStory.args,
  uploadFolders: true
}

export const CustomFile = Template.bind({});
CustomFile.args = {
  ...DefaultStory.args,
  file: fakeFileModel
}

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  ...DefaultStory.args,
  multipleFiles: true
}

export const FolderNodeType = Template.bind({});
FolderNodeType.args = {
  ...DefaultStory.args,
  nodeType: 'cm:folder'
}

///////////////////////////

export const AcceptedFilesType = Template.bind({});
AcceptedFilesType.args = {
  ...DefaultStory.args,
  acceptedFilesType: '.jpg,.pdf,.js'
}

export const MaxFileSize = Template.bind({});
MaxFileSize.args = {
  ...DefaultStory.args,
  maxFilesSize: 2000000
}

export const Tooltip = Template.bind({});
Tooltip.args = {
  ...DefaultStory.args,
  tooltip: 'Custom tooltip message'
}

export const Comment = Template.bind({});
Comment.args = {
  ...DefaultStory.args,
  comment: 'test comment'
}

export const Versioning = Template.bind({});
Versioning.args = {
  ...DefaultStory.args,
  versioning: true
}

export const MajorVersion = Template.bind({});
MajorVersion.args = {
  ...DefaultStory.args,
  majorVersion: true
}
