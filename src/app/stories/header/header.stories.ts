import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { HeaderComponent, HeaderModule } from './header.component';

export default {
  component: HeaderComponent,
  title: 'Header component',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        HeaderModule,
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule
      ]
    })
  ]
} as Meta;

const Template: Story<HeaderComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  color: 'primary',
  expandedSidenav: false,
  logo: undefined,
  position: 'start',
  redirectUrl: '/',
  showSidenavToggle: true,
  title: 'Default title',
  tooltip: 'Default tooltip'
};

export const AccentColor = Template.bind({});
AccentColor.args = {
  ...DefaultStory.args,
  color: 'accent'
};

export const ExpandedSidenav = Template.bind({});
ExpandedSidenav.args = {
  ...DefaultStory.args,
  expandedSidenav: true
};

export const CustomLogo = Template.bind({});
CustomLogo.args = {
  ...DefaultStory.args,
  logo: './assets/images/baseline-lock-24px.svg'
};

export const PositionEnd = Template.bind({});
PositionEnd.args = {
  ...DefaultStory.args,
  position: 'end'
};

export const RedirectUrl = Template.bind({});
RedirectUrl.args = {
  ...DefaultStory.args,
  showRedirect: true,
  redirectUrl: '/custom-path'
};

export const SidenavToggleHidden = Template.bind({});
SidenavToggleHidden.args = {
  ...DefaultStory.args,
  showSidenavToggle: false
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  ...DefaultStory.args,
  title: 'Custom Header Title'
};

export const CustomLogoTooltip = Template.bind({});
CustomLogoTooltip.args = {
  ...DefaultStory.args,
  tooltip: 'Custom Logo Tooltip'
};

export const OptionalContent = Template.bind({});
OptionalContent.args = {
  ...DefaultStory.args,
  optionalContent: true
};
