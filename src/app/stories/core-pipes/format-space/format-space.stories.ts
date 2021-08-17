import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { FormatSpaceComponent } from './format-space.component';

export default {
  component: FormatSpaceComponent,
  title: 'Pipes from Core/Format Space',
  decorators: [
    moduleMetadata({
      declarations: [FormatSpaceComponent],
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
  }
} as Meta;

const Template: Story<FormatSpaceComponent> = (args) => ({
  props: args
});

export const FormatSpaceDefault = Template.bind({});

FormatSpaceDefault.args = {
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