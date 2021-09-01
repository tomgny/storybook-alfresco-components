import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { EmptyListComponent } from './empty-list.component';

export default {
  component: EmptyListComponent,
  title: 'Core/Components/Empty List',
  decorators: [
    moduleMetadata({
      declarations: [EmptyListComponent],
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
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    data: { table: { disable: true } }
  }
} as Meta;

const Template: Story<EmptyListComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  showContent: true,
  headerText: 'Header section',
  bodyText:
    'Body section - You can use this component with different ones like Document List, Datatable and more. Different styles are applied to each section in this example.',
  footerText: 'Footer section. Below is content section.'
};

export const HeaderHidden = Template.bind({});

HeaderHidden.args = {
  ...Default.args,
  showHeader: false
};

export const BodyHidden = Template.bind({});

BodyHidden.args = {
  ...Default.args,
  showBody: false
};

export const FooterHidden = Template.bind({});

FooterHidden.args = {
  ...Default.args,
  showFooter: false
};

export const ContentHidden = Template.bind({});

ContentHidden.args = {
  ...Default.args,
  showContent: false
};
