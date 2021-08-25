import { CoreModule, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
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
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: TRANSLATION_PROVIDER,
          multi: true,
          useValue: {
            name: 'app',
            source: 'assets'
          }
        }
      ]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } }
  }
} as Meta;

const Template: Story<SidenavLayoutComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {};
