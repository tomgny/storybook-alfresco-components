import { AlfrescoApiService, AuthenticationService, CoreModule, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Subject } from 'rxjs';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiStubService } from '../login/mock/alfresco-api-stub.service';
import { AuthenticationStubService } from '../login/mock/authentication-stub.service';
import { LoginDialogComponent } from './login-dialog.component';

export default {
  component: LoginDialogComponent,
  title: 'Core/Dialogs/Login',
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
        { provide: AlfrescoApiService, useClass: AlfrescoApiStubService },
        {
          provide: TRANSLATION_PROVIDER,
          multi: true,
          useValue: {
            name: 'app',
            source: 'assets'
          }
        }
      ]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `The Login Dialog Component is typically shown in a dialog box rather than the main page and you are responsible for opening the dialog yourself. You can use the Angular Material Dialog for this, as shown in this example. ADF provides the LoginDialogComponentData interface to work with the Dialog's data option.
        
        Username: hruser
          
    Password: password
          `
      }
    }
  },
  argTypes: {
    logged: { control: { type: null } },
    openLoginDialog: { table: { disable: true } }
  }
} as Meta;

const Template: Story<LoginDialogComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  title: 'Perform a Login',
  actionName: 'Access',
  logged: new Subject<any>()
};
