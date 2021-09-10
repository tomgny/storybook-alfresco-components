import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import pkg from 'package.json';
import { AboutApplicationModulesComponent } from './about-application-modules.component';
import { ExtensionsModule } from '@alfresco/adf-extensions';

export default {
  component: AboutApplicationModulesComponent,
  title: 'Core/Components/About/Application Modules',
  decorators: [
    moduleMetadata({
      declarations: [AboutApplicationModulesComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ExtensionsModule.forRoot()
      ]
    })
  ]
} as Meta;

const Template: Story<AboutApplicationModulesComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  dependencies: pkg.dependencies,
  showExtensions: true,
  regexp: '^(@alfresco)'
};

export const ExtensionsDisabled = Template.bind({});

ExtensionsDisabled.args = {
  ...Default.args,
  showExtensions: false
};
