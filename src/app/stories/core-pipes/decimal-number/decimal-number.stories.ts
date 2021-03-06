import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { DecimalNumberComponent } from './decimal-number.component';

export default {
  component: DecimalNumberComponent,
  title: 'Core/Pipes/Decimal Number',
  decorators: [
    moduleMetadata({
      declarations: [DecimalNumberComponent],
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
    locale: {
      options: ['en-US', 'fr', 'de', 'it', 'es', 'ja', 'nl', 'pt', 'nb', 'ru', 'zh', 'ar', 'cs', 'pl', 'fi', 'da', 'sv'],
      control: { type: 'select' }
    },
    ngOnInit: { table: { disable: true } },
    digitsInfo: { control: { type: null } },
    validateAndSetDigitsInfoValues: { table: { disable: true } },
    displayedColumns: { table: { disable: true } }
  }
} as Meta;

const Template: Story<DecimalNumberComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  numbersToTransform: [1234.567]
};

export const CustomConfigurationSet = Template.bind({});

CustomConfigurationSet.args = {
  ...Default.args,
  minIntegerDigits: 2,
  minFractionDigits: 1,
  maxFractionDigits: 4
};

export const DifferentLocaleSet = Template.bind({});

DifferentLocaleSet.args = {
  ...Default.args,
  locale: 'pl'
};
