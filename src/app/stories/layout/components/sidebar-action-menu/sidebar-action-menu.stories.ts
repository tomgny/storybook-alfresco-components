import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../../app.routes';
import { AppCommonModule } from '../../../../components/common/common.module';
import { SidebarActionMenuComponent } from './sidebar-action-menu.component';

export default {
  component: SidebarActionMenuComponent,
  title: 'Core/Components/Layout/Sidebar Action Menu',
  decorators: [
    moduleMetadata({
      declarations: [SidebarActionMenuComponent],
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
    ngOnInit: { table: { disable: true } }
  }
} as Meta;

const Template: Story<SidebarActionMenuComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  expanded: false,
  title: 'Menu',
  width: 272,
  expandIcon: 'queue',
  titleIcon: 'arrow_drop_down'
};

export const ExpandedSet = Template.bind({});

ExpandedSet.args = {
  ...Default.args,
  expanded: true
};

export const DifferentTitleSet = Template.bind({});

DifferentTitleSet.args = {
  ...ExpandedSet.args,
  title: 'Drop Down Menu'
};

export const DifferentWidthSet = Template.bind({});

DifferentWidthSet.args = {
  ...Default.args,
  width: 450
};
