import { AlfrescoApiService, AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiStubService } from '../login/mock/alfresco-api-stub.service';
import { AuthenticationStubService } from '../login/mock/authentication-stub.service';
import { LoginDialogPanelComponent } from './login-dialog-panel.component';

export default {
  component: LoginDialogPanelComponent,
  title: 'Core/Components/Login Dialog Panel',
  decorators: [
    moduleMetadata({
      declarations: [LoginDialogPanelComponent],
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
        { provide: AuthenticationService, useClass: AuthenticationStubService },
        { provide: AlfrescoApiService, useClass: AlfrescoApiStubService }
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `The most common way of using this component is as a part of a different component that is intented to be used in a dialog. You can use its tag selector in content section and bind its performLogin() method to a button.
          
        Username: hruser
          
    Password: password
          `
      }
    }
  }
} as Meta;

const Template: Story<LoginDialogPanelComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {};
