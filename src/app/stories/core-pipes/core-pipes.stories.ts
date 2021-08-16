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
    showFormatSpace: { table: { disable: true } },
    showDecimalNumber: { table: { disable: true } },
    digitsInfo: { table: { disable: true } },
    validateAndSetDigitsInfoValues: { table: { disable: true } },
    showFileSize: { table: { disable: true } }
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
};

export const MultiValueCustomSeparatorSet = Template.bind({});

MultiValueCustomSeparatorSet.args = {
  ...MultiValueDefault.args,
  customSeparator: ' :) '
};

export const FormatSpaceDefault = Template.bind({});

FormatSpaceDefault.args = {
  showFormatSpace: true,
  textToFormat: 'LOREM IPSUM DOLOR SIT AMET'
};

export const FormatSpaceCustomReplaceCharSet = Template.bind({});

FormatSpaceCustomReplaceCharSet.args = {
  ...FormatSpaceDefault.args,
  replaceChar: '-'
};

export const FormatSpaceSkipConversionToLowercase = Template.bind({});

FormatSpaceSkipConversionToLowercase.args = {
  ...FormatSpaceDefault.args,
  lowercase: false
};

export const DecimalNumberDefault = Template.bind({});

DecimalNumberDefault.args = {
  showDecimalNumber: true,
  numberToTransform: 1234.567
};

export const DecimalNumberCustomConfigurationSet = Template.bind({});

DecimalNumberCustomConfigurationSet.args = {
  ...DecimalNumberDefault.args,
  minIntegerDigits: 2,
  minFractionDigits: 1,
  maxFractionDigits: 4
};

export const DecimalNumberDifferentLocale = Template.bind({});

DecimalNumberDifferentLocale.args = {
  ...DecimalNumberDefault.args,
  locale: 'pl'
};

export const FileSizeDefault = Template.bind({});

FileSizeDefault.args = {
  showFileSize: true,
  sizeInBytes: 587
};

export const FileSizeKB = Template.bind({});

FileSizeKB.args = {
  ...FileSizeDefault.args,
  sizeInBytes: 1057
};

export const FileSizeMB = Template.bind({});

FileSizeMB.args = {
  ...FileSizeDefault.args,
  sizeInBytes: 1051237
};

export const FileSizeGB = Template.bind({});

FileSizeGB.args = {
  ...FileSizeDefault.args,
  sizeInBytes: 10512331237
};

export const FileSizeDifferentDecimalPlacesNumberSet = Template.bind({});

FileSizeDifferentDecimalPlacesNumberSet.args = {
  ...FileSizeDefault.args,
  sizeInBytes: 12312312312333,
  decimalPlacesNumber: 3
};

export const FileSizeDifferentLang = Template.bind({});

FileSizeDifferentLang.args = {
  ...FileSizeDefault.args,
  locale: 'ja'
};
