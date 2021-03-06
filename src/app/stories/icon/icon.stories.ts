import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { IconComponent } from './icon.component';

export default {
  component: IconComponent,
  title: 'Core/Components/Icon',
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
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
    iconCustom: { options: ['baseline:lock', 'adf:move-file', 'alfresco:join-library'], control: { type: 'radio' } }
  }
} as Meta;

const Template: Story<IconComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  iconWithLigature: 'folder',
  iconThumbnailService: 'adf:image/jpeg',
  iconCustom: 'baseline:lock'
};
