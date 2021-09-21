import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { InfoDrawerLayoutComponent } from './info-drawer-layout.component';

export default {
  component: InfoDrawerLayoutComponent,
  title: 'Core/Components/Info Drawer Layout',
  decorators: [
    moduleMetadata({
      declarations: [InfoDrawerLayoutComponent],
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
    onClick: { table: { disable: true } }
  }
} as Meta;

const Template: Story<InfoDrawerLayoutComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showHeader: true,
  title: 'File info',
  icons: ['clear'],
  showContent: true,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit quam sit amet metus posuere, eu condimentum risus luctus. Phasellus semper semper metus. Phasellus sit amet luctus neque, sit amet tempor lacus. Praesent imperdiet ut erat quis semper. Proin pulvinar nisi felis, eu tristique enim pulvinar tempus. Suspendisse potenti. Suspendisse auctor pharetra quam, quis consectetur metus feugiat at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras varius quam ut molestie viverra.'
};

export const HeaderHidden = Template.bind({});

HeaderHidden.args = {
  ...Default.args,
  showHeader: false
};

export const NoTitle = Template.bind({});

NoTitle.args = {
  ...Default.args,
  title: ''
};

export const NoIcons = Template.bind({});

NoIcons.args = {
  ...Default.args,
  icons: []
};

export const MultipleIcons = Template.bind({});

MultipleIcons.args = {
  ...Default.args,
  icons: ['done', 'clear']
};

export const NoContent = Template.bind({});

NoContent.args = {
  ...Default.args,
  content: ''
};

export const ContentHidden = Template.bind({});

ContentHidden.args = {
  ...Default.args,
  showContent: false
};
