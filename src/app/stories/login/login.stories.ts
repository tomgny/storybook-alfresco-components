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
  argTypes: {}
} as Meta;

const Template: Story<LoginComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showRememberMe: true,
  showLoginActions: true
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
