import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { AppConfigComponent } from './app-config.component';

export default {
  component: AppConfigComponent,
  title: 'Core/Pipes/App Config',
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
    configForChaining: { table: { disable: true } },
    showAppConfig: { table: { disable: true } },
    dataSourceChaining: { table: { disable: true } },
    displayedColumnsChaining: { table: { disable: true } }
  }
} as Meta;

const Template: Story<AppConfigComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showAppConfig: true,
  configs: ['oauth2.host']
};

export const FallbackTextSet = Template.bind({});

FallbackTextSet.args = {
  ...Default.args,
  configs: ['lorem.ipsum'],
  fallbackText: 'Not able to find settings you are looking for.'
};

export const ChainingObtainedValuesWithOtherPipe = Template.bind({});

ChainingObtainedValuesWithOtherPipe.args = {
  showAppConfig: false
};
