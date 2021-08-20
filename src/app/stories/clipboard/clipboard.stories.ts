import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ClipboardComponent } from './clipboard.component';

export default {
  component: ClipboardComponent,
  title: 'Core/Directives/Clipboard',
  decorators: [
    moduleMetadata({
      declarations: [ClipboardComponent],
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
    textAreaPlaceHolder: { table: { disable: true } },
    buttonCopyingInputValueText: { table: { disable: true } }
  }
} as Meta;

const Template: Story<ClipboardComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  tooltip: 'CLIPBOARD.CLICK_TO_COPY',
  notification: 'CLIPBOARD.SUCCESS_COPY',
  spanText: 'You can copy text. Click on me!',
  buttonText: 'You can copy content of HTML element. Click me!'
};

export const CustomTooltipTextSet = Template.bind({});

CustomTooltipTextSet.args = {
  ...Default.args,
  tooltip: 'Custom tooltip'
};

export const CustomNotificationTextSet = Template.bind({});

CustomNotificationTextSet.args = {
  ...Default.args,
  notification: 'Custom notification'
};
