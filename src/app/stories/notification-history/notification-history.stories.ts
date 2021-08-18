import { CoreModule, info, warning, error } from '@alfresco/adf-core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { NotificationHistoryComponent } from './notification-history.component';

export default {
  component: NotificationHistoryComponent,
  title: 'Notification History component',
  decorators: [
    moduleMetadata({
      declarations: [NotificationHistoryComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        MatIconModule
      ]
    })
  ],
  argTypes: {
    menuPositionX: {
      options: ['after', 'before'],
      control: { type: 'radio' }
    },
    menuPositionY: {
      options: ['above', 'below'],
      control: { type: 'radio' }
    },
    notifications: { table: { disable: true } }
  }
} as Meta;

const notifications = [
  info('Scheduled meeting will be held in 10 minutes.', { displayName: 'Zoom Meetings', key:'*'}),
  warning('Your password will expire in 10 days.'),
  error('E2E tests are not passing on main branch.'),
  info('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', null),
  warning('Quisque id arcu rhoncus, volutpat neque eu, ultricies sem.', null),
  error('Duis dictum rhoncus laoreet.', null),
  info('Nullam sit amet rutrum dolor.'),
  warning('Nam aliquet eu ante non pharetra.'),
  error('Pellentesque mattis sem quis elit condimentum vestibulum.'),
  info('Duis fringilla nulla sapien, eget volutpat eros faucibus non.'),
  warning('Vivamus nisi ex, tincidunt ac enim vel, consectetur suscipit lorem.'),
  error('Nulla ornare felis sed mauris interdum consectetur.'),
];

// {
//     messages: ['Hey'],
//     datetime: new Date(),
//     initiator: { displayName: 'SYTEM', key: '*' },
//     type: NOTIFICATION_TYPE.INFO
//   } as NotificationModel

const Template: Story<NotificationHistoryComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  maxNotifications: 5,
  menuPositionX: 'after',
  menuPositionY: 'below',
  notifications: notifications
};

export const BeforeAbovePostion = Template.bind({});

BeforeAbovePostion.args = {
  ...Default.args,
  menuPositionX: 'before',
  menuPositionY: 'above'
};

BeforeAbovePostion.parameters = {
  layout: 'centered',
  docs: { description: { story: 'The layout is centered in order to showcase effects of changing values of MenuPostion X and Y.' } }
};

export const DifferentMaxNotificationsSet = Template.bind({});

DifferentMaxNotificationsSet.args = {
  ...Default.args,
  maxNotifications: 2
};

export const NoNotifications = Template.bind({});

NoNotifications.args = {
  ...Default.args,
  notifications: null
};
