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
    user: { table: { disable: true } }
  }
} as Meta;

const Template: Story<FullNameComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  firstName: 'John',
  lastName: 'Smith',
  username: 'johny999',
  email: 'john.smith@gmail.com'
};

export const NoFirstName = Template.bind({});

NoFirstName.args = {
  ...Default.args,
  firstName: ''
};

export const NoLastName = Template.bind({});

NoLastName.args = {
  ...Default.args,
  lastName: ''
};

export const NoFirstAndLastName = Template.bind({});

NoFirstAndLastName.args = {
  ...NoFirstName.args,
  lastName: ''
};

export const NoFirstLastNameAndUsername = Template.bind({});

NoFirstLastNameAndUsername.args = {
  ...NoFirstAndLastName.args,
  username: ''
};

export const Nothing = Template.bind({});

Nothing.args = {
  ...NoFirstLastNameAndUsername.args,
  email: ''
};
