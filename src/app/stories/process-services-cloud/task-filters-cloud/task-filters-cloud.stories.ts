import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { FilterParamsModel } from '@alfresco/adf-process-services';
import { ProcessServicesCloudModule, TaskFilterCloudService } from '@alfresco/adf-process-services-cloud';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppCommonModule } from '../../../components/common/common.module';
import { TaskFilterCloudServiceStub } from './mock/stub-services.service';
import { TaskFiltersCloudComponent } from './task-filters-cloud.component';

export default {
  component: TaskFiltersCloudComponent,
  title: 'Process Services Cloud/Components/Task filters',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CoreModule.forRoot(), AppCommonModule, MaterialModule, BrowserAnimationsModule, ProcessServicesCloudModule],
      providers: [{ provide: TaskFilterCloudService, useClass: TaskFilterCloudServiceStub }]
    })
  ],
  argTypes: {
    appName: { table: { disable: true } },
    taskId: { table: { disable: true } },
    filterParam: {
      options: ['my', 'queued', 'completed'],
      mapping: {
        my: new FilterParamsModel({ name: 'My tasks' }),
        queued: new FilterParamsModel({ name: 'Queued tasks' }),
        completed: new FilterParamsModel({ name: 'Completed tasks' })
      },
      defaultValue: new FilterParamsModel({ name: 'Queued tasks' })
    }
  }
} as Meta;

const Template: Story<TaskFiltersCloudComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  appName: 'app',
  filterParam: undefined,
  showIcons: false
};

export const ShowIcons = Template.bind({});
ShowIcons.args = {
  appName: 'app',
  filterParam: undefined,
  showIcons: true
};

export const FilterParams = Template.bind({});
FilterParams.args = {
  appName: 'app',
  filterParam: new FilterParamsModel({ name: 'Queued tasks' }),
  showIcons: true
};
