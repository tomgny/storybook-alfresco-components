import { ContentMetadataModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, CoreModule, NodesApiService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ContentMetadataCardComponent } from './content-metadata-card.component';
import { mockNode1 } from './mock/fake-node-and-classes';
import { AlfrescoApiServiceStub, NodesApiServiceStub } from './mock/stub-services-and-api';

export default {
  component: ContentMetadataCardComponent,
  title: 'Content Metadata Card component',
  decorators: [
    moduleMetadata({
      declarations: [ContentMetadataCardComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentMetadataModule
      ],
      providers: [
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<ContentMetadataCardComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  Primary: true,
  node: mockNode1,
  preset: '*',
  displayDefaultProperties: true,
  displayAspect: '',
  displayEmpty: false,
  multi: false,
  readOnly: false,
  allowCopyingToClipboardAction: false,
};

const DefaultNotPrimary = Template.bind({});

DefaultNotPrimary.args = {
  ...Default.args,
  Primary: false
};

export const EditionDisabled = Template.bind({});

EditionDisabled.args = {
  ...DefaultNotPrimary.args,
  readOnly: true
};

export const EmptyPropertiesShown = Template.bind({});

EmptyPropertiesShown.args = {
  ...DefaultNotPrimary.args,
  displayEmpty: true
};

export const CustomPreset = Template.bind({});

CustomPreset.args = {
  ...DefaultNotPrimary.args,
  preset: 'custom',
  displayAspect: 'exif:exif'
};

export const DefaultPropertiesHidden = Template.bind({});

DefaultPropertiesHidden.args = {
  ...CustomPreset.args,
  displayDefaultProperties: false
};

export const DisplayingMultipleAccordionsSimultaneouslyEnabled = Template.bind({})

DisplayingMultipleAccordionsSimultaneouslyEnabled.args = {
  ...CustomPreset.args,
  multi: true,
}

export const CopyingToClipboardEnabled = Template.bind({});

CopyingToClipboardEnabled.args = {
  ...DefaultNotPrimary.args,
  allowCopyingToClipboardAction: true,
}