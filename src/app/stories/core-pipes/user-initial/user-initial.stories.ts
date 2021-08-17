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

export const UserInitialDefault = Template.bind({});

UserInitialDefault.args = {
  firstName: 'John',
  lastName: 'Smith'
};

export const UserInitialNoFirstName = Template.bind({});

UserInitialNoFirstName.args = {
  ...UserInitialDefault.args,
  firstName: ''
};

export const UserInitialNoLastName = Template.bind({});

UserInitialNoLastName.args = {
  ...UserInitialDefault.args,
  lastName: ''
};

export const UserInitialNoFirstAndLastName = Template.bind({});

UserInitialNoFirstAndLastName.args = {
  ...UserInitialDefault.args,
  firstName: '',
  lastName: ''
};

export const UserInitialClassNameSet = Template.bind({});

UserInitialClassNameSet.args = {
  ...UserInitialDefault.args,
  className: 'adf-people-initial'
};

export const UserInitialCustomDelimiterSet = Template.bind({});

UserInitialCustomDelimiterSet.args = {
  ...UserInitialDefault.args,
  delimiter: '-'
};
