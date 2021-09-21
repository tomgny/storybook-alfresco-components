import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AboutGithubLinkComponent } from './about-github-link.component';
import pkg from 'package.json';

export default {
  component: AboutGithubLinkComponent,
  title: 'Core/Components/About/Github Link',
  decorators: [
    moduleMetadata({
      declarations: [AboutGithubLinkComponent],
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

const Template: Story<AboutGithubLinkComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  version: pkg.version,
  url: `https://github.com/Alfresco/${pkg.name}/commits/${pkg.commit}`,
  application: ''
};
