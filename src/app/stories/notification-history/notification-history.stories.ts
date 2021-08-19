import { CoreModule, info, warning, error, NotificationModel, NOTIFICATION_TYPE } from '@alfresco/adf-core';
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
    ngOnInit: { table: { disable: true } },
  }
} as Meta;

const notifications = [
  info('Scheduled meeting will be held in 10 minutes.', { displayName: 'Zoom Meetings', key: '*' }),
  warning('Your password will expire in 10 days.'),
  error('E2E tests are not passing on main branch.', null),
  info('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', null),
  warning('Quisque id arcu rhoncus, volutpat neque eu, ultricies sem.', null),
  {
    messages: ['Morbi eget arcu ipsum.'],
    datetime: new Date(new Date().getTime() + -5 * 60000),
    initiator: { displayName: 'John Smith', key: '*' },
    type: NOTIFICATION_TYPE.INFO
  } as NotificationModel,
  {
    messages: ['Ut a interdum risus, vel cursus nibh.'],
    datetime: new Date(new Date().getTime() + -61 * 60000),
    initiator: { displayName: 'Alan Smith', key: '*' },
    type: NOTIFICATION_TYPE.ERROR
  } as NotificationModel,
  {
    messages: ['Nulla facilisi.'],
    datetime: new Date(new Date().getTime() + -721 * 60000),
    initiator: { displayName: 'Rachel Smith', key: '*' },
    type: NOTIFICATION_TYPE.WARN
  } as NotificationModel,
  {
    messages: ['Sed at tempus tortor.'],
    datetime: new Date(new Date().getTime() + -1441 * 60000),
    initiator: { displayName: 'Jessica Smith', key: '*' },
    type: NOTIFICATION_TYPE.INFO
  } as NotificationModel,{
    messages: ['Sed rutrum cursus massa id pharetra.'],
    datetime: new Date(new Date().getTime() + -4321 * 60000),
    initiator: { displayName: 'Kate Smith', key: '*' },
    type: NOTIFICATION_TYPE.WARN
  } as NotificationModel,{
    messages: ['Cras iaculis non turpis a aliquet.'],
    datetime: new Date(new Date().getTime() + -10081 * 60000),
    initiator: { displayName: 'Lauren Smith', key: '*' },
    type: NOTIFICATION_TYPE.ERROR
  } as NotificationModel,
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
