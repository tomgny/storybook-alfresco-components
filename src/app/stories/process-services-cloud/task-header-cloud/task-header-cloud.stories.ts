import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { ProcessServicesCloudModule, TaskCloudModule } from '@alfresco/adf-process-services-cloud';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppCommonModule } from '../../../components/common/common.module';
import { TaskHeaderCloudComponent } from './task-header-cloud.component';

export default {
  component: TaskHeaderCloudComponent,
  title: 'Process Services Cloud/Components/Task Header',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule,
        ProcessServicesCloudModule,
        TaskCloudModule

      ]
    })
  ],
  argTypes: {
    links: {table: {disable: true}},
    ngOnDestroy: {table: {disable: true}},
    onSidenavClick: {table: {disable: true}},
  }
} as Meta;

const Template: Story<TaskHeaderCloudComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  appName: 'default',
  showTitle: false,
  taskId: 'test'
}
