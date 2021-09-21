import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ErrorContentComponent } from './error-content.component';

export default {
  component: ErrorContentComponent,
  title: 'Core/Components/Error Content',
  decorators: [
    moduleMetadata({
      declarations: [ErrorContentComponent],
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
    onClick: { table: { disable: true } }
  }
} as Meta;

const Template: Story<ErrorContentComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  errorCode: '404',
  showActions: false
};

export const ActionsDisplayed = Template.bind({});

ActionsDisplayed.args = {
  errorCode: '404',
  showActions: true
};

export const UnknownError = Template.bind({});

UnknownError.args = {
  errorCode: '',
  showActions: false
};
