import { AuthenticationService, BpmUserService, CoreModule, EcmUserService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { UserInfoComponent } from './user-info.component';
import { AuthenticationServiceStub, BpmUserServiceStub, EcmUserServiceStub } from './stub-services';

export default {
  component: UserInfoComponent,
  title: 'User Info component',
  decorators: [
    moduleMetadata({
      declarations: [UserInfoComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: EcmUserService, useClass: EcmUserServiceStub },
        { provide: BpmUserService, useClass: BpmUserServiceStub }
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
    namePosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    user: {
      options: ['ecm', 'bpm'],
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<UserInfoComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  Primary: true,
  bpmBackgroundImage: './assets/images/bpm-background.png',
  ecmBackgroundImage: './assets/images/ecm-background.png',
  menuPositionX: 'after',
  menuPositionY: 'below',
  namePosition: 'right',
  showName: true,
  user: 'bpm'
};

export const WithNameHidden = Template.bind({});

WithNameHidden.args = {
  ...Default.args,
  Primary: false,
  showName: false
};

export const NameOnLeft = Template.bind({});

NameOnLeft.args = {
  ...Default.args,
  Primary: false,
  namePosition: 'left'
};

export const MenuPostionAfterBelow = Template.bind({});

// The layout is centered in order to showcase
// effects of changing values of MenuPostion X and Y
MenuPostionAfterBelow.parameters = {
  layout: 'centered'
};

MenuPostionAfterBelow.args = {
  ...Default.args,
  Primary: false
};

export const MenuPostionBeforeAbove = Template.bind({});

// The layout is centered in order to showcase
// effects of changing values of MenuPostion X and Y
MenuPostionBeforeAbove.parameters = {
  layout: 'centered'
};

MenuPostionBeforeAbove.args = {
  ...MenuPostionAfterBelow.args,
  menuPositionX: 'before',
  menuPositionY: 'above'
};
