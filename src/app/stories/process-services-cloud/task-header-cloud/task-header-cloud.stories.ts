import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { ProcessServicesCloudModule, TaskCloudService } from '@alfresco/adf-process-services-cloud';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppCommonModule } from '../../../components/common/common.module';
import { TaskCloudServiceStub } from './mock/stub-services';
import { TaskHeaderCloudComponent } from './task-header-cloud.component';

export default {
  component: TaskHeaderCloudComponent,
  title: 'Process Services Cloud/Components/Task Header',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CoreModule.forRoot(), AppCommonModule, MaterialModule, BrowserAnimationsModule, ProcessServicesCloudModule],
      providers: [{ provide: TaskCloudService, useClass: TaskCloudServiceStub }]
    })
  ],
  argTypes: {
    appName: { table: { disable: true } },
    taskId: { table: { disable: true } }
  }
} as Meta;

const Template: Story<TaskHeaderCloudComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  appName: 'taskAssigned',
  showTitle: false,
  taskId: 'task'
};

export const NotEditable = Template.bind({});
NotEditable.args = {
  appName: 'taskCompleted',
  showTitle: false,
  taskId: 'task'
};

export const ShowTitle = Template.bind({});
ShowTitle.args = {
  appName: 'taskAssigned',
  showTitle: true,
  taskId: 'task'
};
