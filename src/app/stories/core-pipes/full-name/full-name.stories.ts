import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { FullNameComponent } from './full-name.component';

export default {
  component: FullNameComponent,
  title: 'Pipes from Core/Full Name',
  decorators: [
    moduleMetadata({
      declarations: [FullNameComponent],
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
    ngOnInit: { table: { disable: true } },
    user: { table: { disable: true } },
  }
} as Meta;

const Template: Story<FullNameComponent> = (args) => ({
  props: args
});

export const FullNameDefault = Template.bind({});

FullNameDefault.args = {
  firstName: 'John',
  lastName: 'Smith',
  username: 'johny999',
  email: 'john.smith@gmail.com'
};

export const FullNameNoFirstName = Template.bind({});

FullNameNoFirstName.args = {
  ...FullNameDefault.args,
  firstName: ''
};

export const FullNameNoLastName = Template.bind({});

FullNameNoLastName.args = {
  ...FullNameDefault.args,
  lastName: ''
};

export const FullNameNoFirstAndLastName = Template.bind({});

FullNameNoFirstAndLastName.args = {
  ...FullNameDefault.args,
  firstName: '',
  lastName: ''
};

export const FullNameNoFirstLastNameAndUsername = Template.bind({});

FullNameNoFirstLastNameAndUsername.args = {
  ...FullNameDefault.args,
  firstName: '',
  lastName: '',
  username: ''
};

export const FullNameNothing = Template.bind({});

FullNameNothing.args = {
  ...FullNameDefault.args,
  firstName: '',
  lastName: '',
  username: '',
  email: ''
};