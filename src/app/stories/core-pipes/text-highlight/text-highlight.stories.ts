import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { TextHighlightComponent } from './text-highlight.component';

export default {
  component: TextHighlightComponent,
  title: 'Pipes from Core/Text Highlight',
  decorators: [
    moduleMetadata({
      declarations: [TextHighlightComponent],
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
  ]
} as Meta;

const Template: Story<TextHighlightComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showTextHighlight: true,
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere varius fermentum. Aliquam pretium lacus sed tellus mollis dictum. Curabitur bibendum iaculis scelerisque.',
  wordsToHighlight: 'ipsum consectetur posuere'
};
