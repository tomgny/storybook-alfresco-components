import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { FormCloudService, ProcessServicesCloudModule, TaskCloudService } from '@alfresco/adf-process-services-cloud';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppCommonModule } from '../../../components/common/common.module';
import { FormCloudServiceStub, TaskCloudServiceStub } from '../task-header-cloud/mock/stub-services';
import { TaskFormCloudComponent } from './task-form-cloud.component';

export default {
  component: TaskFormCloudComponent,
  title: 'Process Services Cloud/Components/Task Form',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CoreModule.forRoot(), AppCommonModule, MaterialModule, BrowserAnimationsModule, ProcessServicesCloudModule],
      providers: [
        { provide: TaskCloudService, useClass: TaskCloudServiceStub },
        { provide: FormCloudService, useClass: FormCloudServiceStub }
      ]
    })
  ],
  argTypes: {
    appName: { table: { disable: true } },
    taskId: { table: { disable: true } }
  }
} as Meta;

const Template: Story<TaskFormCloudComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  appName: 'taskAssigned',
  readOnly: false,
  showCancelButton: true,
  showCompleteButton: true,
  showRefreshButton: false,
  showTitle: true,
  showValidationIcon: true,
  taskId: 'task'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true
};

export const HideCancelButton = Template.bind({});
HideCancelButton.args = {
  ...Default.args,
  showCancelButton: false
};

export const HideCompleteButton = Template.bind({});
HideCompleteButton.args = {
  ...Default.args,
  showCompleteButton: false
};

export const ShowRefreshButton = Template.bind({});
ShowRefreshButton.args = {
  ...Default.args,
  showRefreshButton: true
};

export const HideTitle = Template.bind({});
HideTitle.args = {
  ...Default.args,
  showTitle: false
};

export const HideValidationIcon = Template.bind({});
HideValidationIcon.args = {
  ...Default.args,
  showValidationIcon: false
};
