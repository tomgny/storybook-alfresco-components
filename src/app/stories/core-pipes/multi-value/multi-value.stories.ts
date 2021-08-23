import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { MultiValueComponent } from './multi-value.component';

export default {
  component: MultiValueComponent,
  title: 'Core/Pipes/Multi Value',
  decorators: [
    moduleMetadata({
      declarations: [MultiValueComponent],
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
    ngOnInit: { table: { disable: true } },
    dataSource: { table: { disable: true } },
    displayedColumns: { table: { disable: true } }
  }
} as Meta;

const Template: Story<MultiValueComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  words: ['cat', 'dog', 'parrot', 'dove', 'rabbit']
};

export const CustomSeparatorSet = Template.bind({});

CustomSeparatorSet.args = {
  ...Default.args,
  separator: ' :) '
};
