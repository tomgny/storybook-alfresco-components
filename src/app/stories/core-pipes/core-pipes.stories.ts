import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { CorePipesComponent } from './core-pipes.component';

export default {
  component: CorePipesComponent,
  title: 'Pipes from Core',
  decorators: [
    moduleMetadata({
      declarations: [CorePipesComponent],
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
    showTimeAgo: { table: { disable: true } },
    textForDate: { table: { disable: true } },
    registerLocales: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    getStringBasedOnDate: { table: { disable: true } },
    showMultiValue: { table: { disable: true } },
  }
} as Meta;

const Template: Story<CorePipesComponent> = (args) => ({
  props: args
});

export const TimeAgoNow = Template.bind({});

TimeAgoNow.args = {
  showTimeAgo: true,
  date: new Date()
};

const getDateXDaysBefore = (numberOfDaysBefore: number) => {
  const date = new Date();
  return date.setDate(date.getDate() - numberOfDaysBefore);
};

export const TimeAgoYesterday = Template.bind({});

TimeAgoYesterday.args = {
  ...TimeAgoNow.args,
  date: getDateXDaysBefore(1)
};

export const TimeAgo3DaysBefore = Template.bind({});

TimeAgo3DaysBefore.args = {
  ...TimeAgoNow.args,
  date: getDateXDaysBefore(3)
};

export const TimeAgo8DaysBefore = Template.bind({});

TimeAgo8DaysBefore.args = {
  ...TimeAgoNow.args,
  date: getDateXDaysBefore(8)
};

export const TimeAgoTomorrow = Template.bind({});

TimeAgoTomorrow.args = {
  ...TimeAgoNow.args,
  date: getDateXDaysBefore(-1)
};

export const TimeAgo3DaysAfter = Template.bind({});

TimeAgo3DaysAfter.args = {
  ...TimeAgoNow.args,
  date: getDateXDaysBefore(-3)
};

export const TimeAgoDifferentLocale8DaysAgo = Template.bind({});

TimeAgoDifferentLocale8DaysAgo.args = {
  ...TimeAgo8DaysBefore.args,
  locale: 'pl'
};

export const TimeAgoDifferentLocale2DaysAgo = Template.bind({});

TimeAgoDifferentLocale2DaysAgo.args = {
  ...TimeAgoDifferentLocale8DaysAgo.args,
  date: getDateXDaysBefore(2)
};

export const MultiValueDefault = Template.bind({});

MultiValueDefault.args = {
  showMultiValue: true,
  animals: ['cat', 'dog', 'parrot', 'dove', 'rabbit']
}

export const MultiValueCustomSeparatorSet = Template.bind({});

MultiValueCustomSeparatorSet.args = {
  ...MultiValueDefault.args,
  customSeparator: ' :) '
}
