import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { MimeTypeIconComponent } from './mime-type-icon.component';

export default {
  component: MimeTypeIconComponent,
  title: 'Pipes from Core/Mime Type Icon',
  decorators: [
    moduleMetadata({
      declarations: [MimeTypeIconComponent],
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

const Template: Story<MimeTypeIconComponent> = (args) => ({
  props: args
});

export const JPEG = Template.bind({});

JPEG.args = {
  icon: 'image/jpeg'
};

export const WrongMimeType = Template.bind({});

WrongMimeType.args = {
  icon: 'lorem/ipsum'
};

export const PDF = Template.bind({});

PDF.args = {
  icon: 'application/pdf'
};

export const HTML = Template.bind({});

HTML.args = {
  icon: 'text/html'
};

export const Folder = Template.bind({});

Folder.args = {
  icon: 'folder'
};
