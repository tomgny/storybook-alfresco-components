import { ContentModule } from '@alfresco/adf-content-services';
import { CardViewTextItemModel, CoreModule, MaterialModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../app.routes';
import { AppCommonModule } from '../components/common/common.module';
import { MycardviewComponent } from './mycardview.component';

export default {
  component: MycardviewComponent,
  title: 'Cardview component',
  decorators: [
    moduleMetadata({
      declarations: [MycardviewComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule
      ],
    }),
  ]
} as Meta;


const dataSource = [
  new CardViewTextItemModel({
    label: 'CardView Text Item - Multivalue (chips)',
    value: [1, 2, 3, 4],
    key: 'name',
    default: 'default bar',
    multiline: true,
    multivalued: true,
    icon: 'icon',
    editable: true
}),
]

const Template: Story<MycardviewComponent> = (args) => ({
  props: {
    ...args
  }
})

export const FirstStory = Template.bind({});
FirstStory.args = {
  inputCopyToClipboardAction: true,
  inputDisplayClearAction: true,
  inputDisplayEmpty: true,
  inputDisplayNoneOption: true,
  editable: true,
  inputProperties: dataSource,
  inputMultiValueSeparator: ',',
  inputUseChipsForMultiValueProperty: true,
  //testValueArray: [1,2,3,4,5,6,7]
}
