import { CoreModule, NotificationModel, NOTIFICATION_TYPE } from '@alfresco/adf-core';
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
        BrowserAnimationsModule
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
    notifications: { table: { disable: true } },
  }
} as Meta;

const notification1 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification2 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification3 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification4 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification5 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification6 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification7 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification8 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification9 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification10 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notification11 = {
  messages: ['Hey'],
  datetime: new Date(),
  initiator: { displayName: 'System', key: 'system' },
  type: NOTIFICATION_TYPE.INFO
} as NotificationModel;

const notifications = [
  notification1,
  notification2,
  notification3,
  notification4,
  notification5,
  notification6,
  notification7,
  notification8,
  notification9,
  notification10,
  notification11
];

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
