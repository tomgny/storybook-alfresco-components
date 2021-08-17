import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { FileSizeComponent } from './file-size.component';

export default {
  component: FileSizeComponent,
  title: 'Pipes from Core/File Size',
  decorators: [
    moduleMetadata({
      declarations: [FileSizeComponent],
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
    showFileSize: { table: { disable: true } },
  }
} as Meta;

const Template: Story<FileSizeComponent> = (args) => ({
  props: args
});

export const FileSizeDefault = Template.bind({});

FileSizeDefault.args = {
  sizeInBytes: 587
};

export const FileSizeKB = Template.bind({});

FileSizeKB.args = {
  sizeInBytes: 1057
};

export const FileSizeMB = Template.bind({});

FileSizeMB.args = {
  sizeInBytes: 1051237
};

export const FileSizeGB = Template.bind({});

FileSizeGB.args = {
  sizeInBytes: 10512331237
};

export const FileSizeDifferentDecimalPlacesNumberSet = Template.bind({});

FileSizeDifferentDecimalPlacesNumberSet.args = {
  sizeInBytes: 12312312312333,
  decimalPlacesNumber: 3
};

export const FileSizeDifferentLang = Template.bind({});

FileSizeDifferentLang.args = {
  ...FileSizeDefault.args,
  locale: 'ja'
};