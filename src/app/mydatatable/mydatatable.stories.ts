import { CoreModule, ObjectDataTableAdapter } from '@alfresco/adf-core';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../app.routes';
import { AppCommonModule } from '../components/common/common.module';
import { MydatatableComponent } from './mydatatable.component';

export default {
  component: MydatatableComponent,
  title: 'Datatable component',
  decorators: [
    moduleMetadata({
      declarations: [MydatatableComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
    // ContentModule.forRoot(),
    // MaterialModule,
      ],
    }),
  ]
} as Meta;

const dataSource = new ObjectDataTableAdapter(
  [
    {
      id: 1,
      firstName: 'Name #1',
      lastName: 'Lastname #1',
      icon: 'material-icons://folder_open'
    },
    {
      id: 2,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 3,
      firstName: 'Name #3',
      lastName: 'Lastname #3',
      icon: 'material-icons://alarm'
    },
    {
      id: 4,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 5,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 6,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 7,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 8,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 9,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 10,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 11,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 12,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
    {
      id: 13,
      firstName: 'Name #2',
      lastName: 'Lastname #2',
      icon: 'material-icons://accessibility'
    },
  ]
);

const Template: Story<MydatatableComponent> = (args) => ({
  props: {
    ...args
  }
})

export const FirstStory = Template.bind({});
FirstStory.args = {
  data: dataSource,
  stickyHeader: true,
  multiSelect: false
}

export const SecondStory = Template.bind({});
SecondStory.args = {
  data: dataSource,
  stickyHeader: false,
  multiSelect: true
}
