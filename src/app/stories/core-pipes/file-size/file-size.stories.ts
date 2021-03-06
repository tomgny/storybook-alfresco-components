import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { FileSizeComponent } from './file-size.component';

export default {
  component: FileSizeComponent,
  title: 'Core/Pipes/File Size',
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
    displayedColumns: { table: { disable: true } }
  }
} as Meta;

const Template: Story<FileSizeComponent> = (args) => ({
  props: args
});

export const B = Template.bind({});

B.args = {
  sizesInBytes: [587]
};

export const KB = Template.bind({});

KB.args = {
  sizesInBytes: [1057]
};

export const MB = Template.bind({});

MB.args = {
  sizesInBytes: [1051237]
};

export const GB = Template.bind({});

GB.args = {
  sizesInBytes: [10512331237]
};

export const DifferentDecimalPlacesNumberSet = Template.bind({});

DifferentDecimalPlacesNumberSet.args = {
  sizesInBytes: [12312312312333],
  decimalPlacesNumber: 3
};

export const DifferentLangSet = Template.bind({});

DifferentLangSet.args = {
  ...B.args,
  locale: 'ja'
};
