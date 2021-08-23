import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
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
      ]
    })
  ],
  argTypes: {
      logoImageUrl: {
          options: ['./assets/images/alfresco-logo.svg', './assets/images/bpm-background.png'],
          control: { type: 'radio' }
      }
    }
} as Meta;

const Template: Story<LoginComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showRememberMe: true,
  showLoginActions: true,
  copyrightText: null,
  logoImageUrl: './assets/images/alfresco-logo.svg'
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

export const CustomCopyrightTextSet = Template.bind({})

CustomCopyrightTextSet.args = {
    ...Default.args,
    copyrightText: 'Custom copyright text.'
}

export const CustomLogoImageSet = Template.bind({})

CustomLogoImageSet.args = {
    ...Default.args,
    logoImageUrl: './assets/images/bpm-background.png'
}
