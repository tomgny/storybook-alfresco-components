import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { LocalizedDateComponent } from './localized-date.component';

export default {
  component: LocalizedDateComponent,
  title: 'Pipes from Core/Localized Date',
  decorators: [
    moduleMetadata({
      declarations: [LocalizedDateComponent],
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
    date: { control: { type: 'date' } },
    locale: {
      options: ['en-US', 'fr', 'de', 'it', 'es', 'ja', 'nl', 'pt', 'nb', 'ru', 'zh', 'ar', 'cs', 'pl', 'fi', 'da', 'sv'],
      control: { type: 'select' }
    },
    ngOnInit: { table: { disable: true } },
    showLocalizedDate: { table: { disable: true } },
  }
} as Meta;

const Template: Story<LocalizedDateComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showLocalizedDate: true,
  date: new Date()
};

export const PreDefinedFormatSet = Template.bind({});

PreDefinedFormatSet.args = {
  ...Default.args,
  format: 'long'
};

export const CustomFormatSet = Template.bind({});

CustomFormatSet.args = {
  ...Default.args,
  format: 'EEEE, MMMM d, y, h:mm:ss a zzzz'
};

export const DifferentLocaleSet = Template.bind({});

DifferentLocaleSet.args = {
  ...Default.args,
  locale: 'pl'
};