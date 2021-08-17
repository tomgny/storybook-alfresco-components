import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { AppConfigComponent } from './app-config.component';

export default {
  component: AppConfigComponent,
  title: 'Pipes from Core/App Config',
  decorators: [
    moduleMetadata({
      declarations: [AppConfigComponent],
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
    configForChaining: { table: { disable: true } },
    showAppConfig: { table: { disable: true } },
   }
} as Meta;

const Template: Story<AppConfigComponent> = (args) => ({
  props: args
});

export const AppConfigDefault = Template.bind({});

AppConfigDefault.args = {
  showAppConfig: true,
  config: 'oauth2.host'
};

export const AppConfigFallbackTextSet = Template.bind({});

AppConfigFallbackTextSet.args = {
  ...AppConfigDefault.args,
  config: 'lorem.ipsum',
  fallbackText: 'Not able to find settings you are looking for.'
};

export const AppConfigChainingWithMultiValuePipe = Template.bind({});

AppConfigChainingWithMultiValuePipe.args = {
  showAppConfig: false,
};
