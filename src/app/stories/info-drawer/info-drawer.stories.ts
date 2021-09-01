import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { InfoDrawerComponent } from './info-drawer.component';

export default {
  component: InfoDrawerComponent,
  title: 'Core/Components/Info Drawer',
  decorators: [
    moduleMetadata({
      declarations: [InfoDrawerComponent],
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

const Template: Story<InfoDrawerComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showHeader: true,
  selectedIndex: 0,
  title: 'Activities',
  label1: 'Activity',
  label2: 'Details',
  icon1: null,
  icon2: null,
  showSecondTab: true,
  tab1Text: '1',
  tab2Text: '2'
};

export const HeaderHidden = Template.bind({});

HeaderHidden.args = {
  ...Default.args,
  showHeader: false
};

export const SecondTabSelectedByDefault = Template.bind({});

SecondTabSelectedByDefault.args = {
  ...Default.args,
  selectedIndex: 1
};

export const IconsOnTabs = Template.bind({});

IconsOnTabs.args = {
  ...Default.args,
  label1: null,
  label2: null,
  icon1: 'comment',
  icon2: 'people'
};

export const IconsAndLabelsOnTabs = Template.bind({});

IconsAndLabelsOnTabs.args = {
  ...Default.args,
  icon1: 'comment',
  icon2: 'people'
};

export const SecondTabHidden = Template.bind({});

SecondTabHidden.args = {
  ...Default.args,
  showSecondTab: false
};
