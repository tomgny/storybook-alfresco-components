import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { EmptyContentComponent } from './empty-content.component';

export default {
  component: EmptyContentComponent,
  title: 'Core/Components/Empty Content',
  decorators: [
    moduleMetadata({
      declarations: [EmptyContentComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot()
      ]
    })
  ],
  parameters:{
    layout:'centered',
  },
} as Meta;

const Template: Story<EmptyContentComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  icon: 'cake',
  subtitle: '',
  title: '',
  lines: []
};

export const TitleSetIconChanged = Template.bind({});

TitleSetIconChanged.args = {
  ...Default.args,
  icon: 'star',
  title: 'No favorite files or folders'
};

export const SubtitleAdded = Template.bind({});

SubtitleAdded.args = {
  ...TitleSetIconChanged.args,
  subtitle: 'Favorite items that you want to easily find later.'
};

export const MultipleLinesInstedOfSubtitle = Template.bind({});

MultipleLinesInstedOfSubtitle.args = {
  icon: 'delete',
  title: 'Trash is empty',
  lines: ['Items you delete are moved to the Trash.', 'Empty Trash to permanentyl delete items.']
};
