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
    showTimeAgo: { control: { type: null } }
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
