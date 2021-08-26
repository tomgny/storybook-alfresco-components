import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { EditJsonDialogComponent } from './edit-json-dialog.component';

export default {
  component: EditJsonDialogComponent,
  title: 'Core/Dialogs/Edit JSON',
  decorators: [
    moduleMetadata({
      declarations: [EditJsonDialogComponent],
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
    settings: { table: { disable: true } },
    openEditJsonDialog: { table: { disable: true } },
    buttonText: { table: { disable: true } },
    json: { table: { disable: true } }
  }
} as Meta;

const Template: Story<EditJsonDialogComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  dialogTitle: '',
  isJsonEditable: false
};

export const CustomTitleSet = Template.bind({});

CustomTitleSet.args = {
  ...Default.args,
  dialogTitle: 'Custom Title'
};

export const JsonEditionEnabled = Template.bind({});

JsonEditionEnabled.args = {
  ...Default.args,
  isJsonEditable: true,
  dialogTitle: 'Edit Json'
};
