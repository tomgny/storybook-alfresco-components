import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { UserInitialComponent } from './user-initial.component';

export default {
  component: UserInitialComponent,
  title: 'Pipes from Core/User Initial',
  decorators: [
    moduleMetadata({
      declarations: [UserInitialComponent],
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
    ngOnInit: { table: { disable: true } },
    className: {
      options: [
        '',
        'adf-people-initial',
        'adf-people-widget-pic',
        'adf-notification-initiator-pic',
        'adf-userinfo-pic',
        'adf-userinfo-profile-initials adf-hide-small'
      ],
      control: { type: 'select' }
    },
    user: { table: { disable: true } }
  }
} as Meta;

const Template: Story<UserInitialComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  firstName: 'John',
  lastName: 'Smith'
};

export const NoFirstName = Template.bind({});

NoFirstName.args = {
  ...Default.args,
  firstName: ''
};

export const NoLastName = Template.bind({});

NoLastName.args = {
  ...Default.args,
  lastName: ''
};

export const NoFirstAndLastName = Template.bind({});

NoFirstAndLastName.args = {
  ...NoFirstName.args,
  lastName: ''
};

export const ClassNameSet = Template.bind({});

ClassNameSet.args = {
  ...Default.args,
  className: 'adf-people-initial'
};

export const CustomDelimiterSet = Template.bind({});

CustomDelimiterSet.args = {
  ...Default.args,
  delimiter: '-'
};
