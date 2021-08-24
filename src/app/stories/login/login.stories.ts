import { AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AuthenticationStubService } from './authentication-stub.service';
import { LoginComponent } from './login.component';

export default {
  component: LoginComponent,
  title: 'Core/Components/Login',
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: AuthenticationService, useClass: AuthenticationStubService }]
    })
  ],
  argTypes: {
    logoImageUrl: {
      options: ['./assets/images/alfresco-logo.svg', './assets/images/bpm-background.png'],
      control: { type: 'radio' }
    },
    backgroundImageUrl: {
      options: ['./assets/images/background.svg', './assets/images/Wallpaper-BG-generic.svg'],
      control: { type: 'radio' }
    },
    alfrescoLogin: { table: { disable: true } },
    customValidation: { control: { type: null } }
  }
} as Meta;

const Template: Story<LoginComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showRememberMe: true,
  showLoginActions: true,
  copyrightText: '\u00A9 2016 Alfresco Software, Inc. All Rights Reserved.',
  logoImageUrl: './assets/images/alfresco-logo.svg',
  backgroundImageUrl: './assets/images/background.svg',
  registerLink: '',
  needHelpLink: '',
  showCustomHeader: false,
  showCustomFooter: false,
  headerText: 'My custom HTML for the header',
  footerText: 'My custom HTML for the footer',
  showCustomContent: false,
  customContent: 'Custom content',
  useCustomValidation: false,
  ssoLogin: false
};

export const RememberMeHidden = Template.bind({});

RememberMeHidden.args = {
  ...Default.args,
  showRememberMe: false
};

export const LoginActionsHidden = Template.bind({});

LoginActionsHidden.args = {
  ...Default.args,
  showLoginActions: false
};

export const CustomCopyrightTextSet = Template.bind({});

CustomCopyrightTextSet.args = {
  ...Default.args,
  copyrightText: 'Custom copyright text.'
};

export const CustomLogoImageSet = Template.bind({});

CustomLogoImageSet.args = {
  ...Default.args,
  logoImageUrl: './assets/images/bpm-background.png'
};

export const CustomBackgroundImageSet = Template.bind({});

CustomBackgroundImageSet.args = {
  ...Default.args,
  backgroundImageUrl: './assets/images/Wallpaper-BG-generic.svg'
};

export const CustomNeedHelpLinkSet = Template.bind({});

CustomNeedHelpLinkSet.args = {
  ...Default.args,
  needHelpLink: '?path=/story/core-components-login--default'
};

export const CustomRegisterLinkSet = Template.bind({});

CustomRegisterLinkSet.args = {
  ...Default.args,
  registerLink: '?path=/story/core-components-login--default'
};

export const ShowCustomHeader = Template.bind({});

ShowCustomHeader.args = {
  ...Default.args,
  showCustomHeader: true
};

export const ShowCustomFooter = Template.bind({});

ShowCustomFooter.args = {
  ...Default.args,
  showCustomFooter: true
};

export const ShowCustomContent = Template.bind({});

ShowCustomContent.args = {
  ...Default.args,
  showCustomContent: true
};

export const UseCustomValidation = Template.bind({});

UseCustomValidation.args = {
  ...Default.args,
  useCustomValidation: true
};

export const SsoLogin = Template.bind({});

SsoLogin.args = {
  ...Default.args,
  ssoLogin: true
};
