import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { TimeAgoComponent } from './time-ago.component';

export default {
  component: TimeAgoComponent,
  title: 'Core/Pipes/Time Ago',
  decorators: [
    moduleMetadata({
      declarations: [TimeAgoComponent],
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
    textForDate: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    getStringBasedOnDate: { table: { disable: true } },
    dataSource: { table: { disable: true } },
    displayedColumns: { table: { disable: true } }
  }
} as Meta;

const Template: Story<TimeAgoComponent> = (args) => ({
  props: args
});

export const Now = Template.bind({});

Now.args = {
  date: new Date()
};

const getDateXDaysBefore = (numberOfDaysBefore: number) => {
  const date = new Date();
  return date.setDate(date.getDate() - numberOfDaysBefore);
};

export const Yesterday = Template.bind({});

Yesterday.args = {
  ...Now.args,
  date: getDateXDaysBefore(1)
};

export const ThreeDaysBefore = Template.bind({});

ThreeDaysBefore.args = {
  ...Now.args,
  date: getDateXDaysBefore(3)
};

export const EightDaysBefore = Template.bind({});

EightDaysBefore.args = {
  ...Now.args,
  date: getDateXDaysBefore(8)
};

export const Tomorrow = Template.bind({});

Tomorrow.args = {
  ...Now.args,
  date: getDateXDaysBefore(-1)
};

export const ThreeDaysAfter = Template.bind({});

ThreeDaysAfter.args = {
  ...Now.args,
  date: getDateXDaysBefore(-3)
};

export const DifferentLocaleSetEightDaysAgo = Template.bind({});

DifferentLocaleSetEightDaysAgo.args = {
  ...EightDaysBefore.args,
  locale: 'pl'
};

export const DifferentLocaleSetTwoDaysAgo = Template.bind({});

DifferentLocaleSetTwoDaysAgo.args = {
  ...DifferentLocaleSetEightDaysAgo.args,
  date: getDateXDaysBefore(2)
};
