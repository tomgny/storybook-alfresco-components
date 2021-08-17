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
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
  }
} as Meta;

const Template: Story<MimeTypeIconComponent> = (args) => ({
  props: args
});

export const MimeTypeIconDefault = Template.bind({})

MimeTypeIconDefault.args = {
  icon: "image/jpeg",
}

export const MimeTypeIconWrongInput = Template.bind({})

MimeTypeIconWrongInput.args = {
  icon: "lorem/ipsum",
}

export const MimeTypeIconPdf = Template.bind({})

MimeTypeIconPdf.args = {
  icon: 'application/pdf',
}

export const MimeTypeIconHtml = Template.bind({})

MimeTypeIconHtml.args = {
  icon: 'text/html',
}

export const MimeTypeIconFolder = Template.bind({})

MimeTypeIconFolder.args = {
  icon: "folder",
}