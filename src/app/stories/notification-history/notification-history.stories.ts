import { CoreModule } from '@alfresco/adf-core';
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
    }
  }
} as Meta;

const Template: Story<NotificationHistoryComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  maxNotifications: 5,
  menuPositionX: 'after',
  menuPositionY: 'below'
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
    maxNotifications: 2,
}
