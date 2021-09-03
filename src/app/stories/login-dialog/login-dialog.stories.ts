import { AlfrescoApiService, AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiStubService } from '../login/mock/alfresco-api-stub.service';
import { AuthenticationStubService } from '../login/mock/authentication-stub.service';
import { LoginDialogComponent } from './login-dialog.component';

export default {
  component: LoginDialogComponent,
  title: 'Core/Components/Login Dialog',
  decorators: [
    moduleMetadata({
      declarations: [LoginDialogComponent],
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
        component: `Username: hruser
          
    Password: password
          `
      }
    }
  }
} as Meta;

const Template: Story<LoginDialogComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  title: 'Perform a Login',
  actionName: 'Access'
};