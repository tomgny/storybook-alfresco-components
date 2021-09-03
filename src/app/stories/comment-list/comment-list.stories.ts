import { CommentModel, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { CommentListComponent } from './comment-list.component';

export default {
  component: CommentListComponent,
  title: 'Core/Components/Comment List',
  decorators: [
    moduleMetadata({
      declarations: [CommentListComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ]
    })
  ],
  argTypes: {
    onClickRow: { action: 'rowClicked' }
  }
} as Meta;

const Template: Story<CommentListComponent> = (args) => ({
  props: args
});

const fakeCompany = {
  organization: '',
  address1: '',
  address2: '',
  address3: '',
  postcode: '',
  telephone: '',
  fax: '',
  email: ''
};

const johnDoe = {
  id: '1',
  email: 'john.doe@alfresco.com',
  firstName: 'John',
  lastName: 'Doe',
  company: fakeCompany,
  enabled: true
};

const getDateXMinutesAgo = (minutes: number) => new Date(new Date().getTime() - minutes * 60000);

const data: CommentModel[] = [
  {
    id: 1,
    message: `I've done this component, is it cool?`,
    created: getDateXMinutesAgo(30),
    createdBy: johnDoe,
    isSelected: false
  },
  {
    id: 2,
    message: 'Yeah',
    created: getDateXMinutesAgo(15),
    createdBy: {
      id: '2',
      email: 'jane.eod@alfresco.com',
      firstName: 'Jane',
      lastName: 'Eod',
      company: fakeCompany,
      enabled: true
    },
    isSelected: false
  },
  {
    id: 3,
    message: '+1',
    created: getDateXMinutesAgo(12),
    createdBy: {
      id: '3',
      email: 'robert.smith@alfresco.com',
      firstName: 'Robert',
      lastName: 'Smith',
      company: fakeCompany,
      enabled: true
    },
    isSelected: false
  },
  {
    id: 4,
    message: 'ty',
    created: new Date(),
    createdBy: johnDoe,
    isSelected: false
  }
];

export const Default = Template.bind({});

Default.args = {
  comments: data
};
