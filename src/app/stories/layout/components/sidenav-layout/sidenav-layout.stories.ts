import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../../app.routes';
import { AppCommonModule } from '../../../../components/common/common.module';
import { SidenavLayoutComponent } from './sidenav-layout.component';

export default {
  component: SidenavLayoutComponent,
  title: 'Core/Components/Layout/Sidenav Layout',
  decorators: [
    moduleMetadata({
      declarations: [SidenavLayoutComponent],
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
    position: { options: ['start', 'end'], control: 'radio' },
    links: { table: { disable: true } },
    setState: { table: { disable: true } }
  }
} as Meta;

const Template: Story<SidenavLayoutComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  sidenavMin: 70,
  sidenavMax: 220,
  stepOver: 600,
  position: 'start',
  hideSidenav: false,
  expandedSidenav: true,
  showSidenavLayoutHeader: true,
  showSidenavLayoutNavigation: true,
  showSidenavLayoutContent: true
};

export const DifferentSidenavMinValueSet = Template.bind({});

DifferentSidenavMinValueSet.args = {
  ...Default.args,
  sidenavMin: 150,
  expandedSidenav: false
};

export const DifferentSidenavMaxValueSet = Template.bind({});

DifferentSidenavMaxValueSet.args = {
  ...Default.args,
  sidenavMax: 400
};

export const DifferentStepOverSet = Template.bind({});

DifferentStepOverSet.args = {
  ...Default.args,
  stepOver: 1200
};

export const EndPositionSet = Template.bind({});

EndPositionSet.args = {
  ...Default.args,
  position: 'end'
};

export const SidenavNotExpandedInitially = Template.bind({});

SidenavNotExpandedInitially.args = {
  ...Default.args,
  expandedSidenav: false
};

export const SidenavHidden = Template.bind({});

SidenavHidden.args = {
  ...SidenavNotExpandedInitially.args,
  hideSidenav: true
};

export const LayoutWithoutHeader = Template.bind({});

LayoutWithoutHeader.args = {
  ...Default.args,
  showSidenavLayoutHeader: false
};

export const LayoutWithoutNavigation = Template.bind({});

LayoutWithoutNavigation.args = {
  ...SidenavNotExpandedInitially.args,
  showSidenavLayoutNavigation: false
};

export const LayoutWithoutContent = Template.bind({});

LayoutWithoutContent.args = {
  ...Default.args,
  showSidenavLayoutContent: false
};
