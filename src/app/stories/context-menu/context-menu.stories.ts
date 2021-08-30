import { ContentModule, UploadModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, MaterialModule, UploadService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Subject } from 'rxjs';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, UploadServiceStub } from '../document-list/mock/stub-services';
import { ContextMenuComponent } from './context-menu.component';

export default {
  component: ContextMenuComponent,
  title: 'Core/Directives/Context Menu',
  decorators: [
    moduleMetadata({
      declarations: [ContextMenuComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        UploadModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: UploadService, useClass: UploadServiceStub }
      ]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    actions: { table: { disable: true } },
    direction: { table: { disable: true } },
    onDestroy$: { table: { disable: true } },
    handleKeydownEscape: { table: { disable: true } },
    ngAfterViewInit: { table: { disable: true } },
    ngOnDestroy: { table: { disable: true } },
    onClickOutsideEvent: { table: { disable: true } },
    runAction: { table: { disable: true } },
    trackByActionId: { table: { disable: true } },
    trigger: { table: { disable: true } }
  }
} as Meta;

const data = [
  {
    model: {
      visible: true,
      disabled: false,
      title: 'Action 1'
    },
    subject: new Subject()
  },
  {
    model: {
      visible: true,
      disabled: true,
      title: 'Action 2'
    },
    subject: new Subject()
  },
  {
    model: {
      visible: true,
      disabled: false,
      title: 'Action 3'
    },
    subject: new Subject()
  }
];

const Template: Story<ContextMenuComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});

Default.args = {
  enabled: true,
  showIcons: false,
  links: data
};

export const ContextMenuDisabled = Template.bind({});

ContextMenuDisabled.args = {
  ...Default.args,
  enabled: false
};

export const ShowIconsOnItems = Template.bind({});

ShowIconsOnItems.args = {
  ...Default.args,
  showIcons: true
};

export const EmptyLinks = Template.bind({});

EmptyLinks.args = {
  ...Default.args,
  links: null
};
