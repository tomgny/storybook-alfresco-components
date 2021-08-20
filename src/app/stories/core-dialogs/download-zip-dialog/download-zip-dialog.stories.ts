import { AlfrescoApiService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { DownloadZipDialogComponent } from './download-zip-dialog.component';
import { AlfrescoApiServiceStub } from './mock/stub-services';

export default {
  component: DownloadZipDialogComponent,
  title: 'Core/Dialogs/Download ZIP',
  decorators: [
    moduleMetadata({
      declarations: [DownloadZipDialogComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub }]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    openDownloadZipDialog: { table: { disable: true } }
  }
} as Meta;

const Template: Story<DownloadZipDialogComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showLoading: false
};

export const LoadingDialog = Template.bind({});

LoadingDialog.args = {
  showLoading: true
};
