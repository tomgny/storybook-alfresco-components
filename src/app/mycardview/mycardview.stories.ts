import { ContentModule } from '@alfresco/adf-content-services';
import {  CardViewArrayItemModel, CardViewBoolItemModel, CardViewDateItemModel, CardViewDatetimeItemModel, CardViewIntItemModel, CardViewKeyValuePairsItemModel, CardViewMapItemModel, CardViewSelectItemModel, CardViewTextItemModel, CoreModule, MaterialModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { of } from 'rxjs';
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
    editable: true,
}),
new CardViewDateItemModel({
    label: 'CardView Date Item - Multivalue (chips)',
    value: [new Date(1983, 11, 24, 10, 0, 30)],
    key: 'date',
    default: new Date(1983, 11, 24, 10, 0, 30),
    format: 'shortDate',
    editable: true,
    multivalued: true
}),
new CardViewDatetimeItemModel({
  label: 'CardView Datetime Item - Multivalue (chips)',
  value: [new Date(1983, 11, 24, 10, 0, 0)],
  key: 'datetime',
  default: new Date(1983, 11, 24, 10, 0, 0),
  format: 'short',
  editable: true,
  multivalued: true
}),
new CardViewBoolItemModel({
    label: 'Agree to all terms and conditions',
    value: true,
    key: 'boolean',
    default: false,
    editable: true
}),
new CardViewIntItemModel({
    label: 'CardView Int Item',
    value: 213,
    key: 'int',
    default: 1,
    editable: true
}),
new CardViewKeyValuePairsItemModel({
    label: 'CardView Key-Value Pairs Item',
    value: [{ name: 'hey', value: 'you' }, { name: 'hey', value: 'you' }],
    key: 'key-value-pairs',
    editable: true
}),
new CardViewSelectItemModel({
    label: 'CardView Select Item',
    value: 'one',
    options$: of([{ key: 'one', label: 'One' }, { key: 'two', label: 'Two' }]),
    key: 'select',
    editable: true
}),
new CardViewMapItemModel({
    label: 'My map',
    value: new Map([['999', 'My Value']]),
    key: 'map',
    default: 'default map value'
}),
new CardViewTextItemModel({
    label: 'This is clickable ',
    value: 'click here',
    key: 'click',
    default: 'click here',
    editable: true,
    clickable: true,
    icon: 'close'
}),
new CardViewArrayItemModel({
    label: 'CardView Array of items',
    value: of([
        { icon: 'directions_bike', value: 'Zlatan' },
        { icon: 'directions_bike', value: 'Lionel Messi' },
        { value: 'Mohamed', directions_bike: 'save' },
        { value: 'Ronaldo' }
    ]),
    key: 'array',
    icon: 'edit',
    default: 'Empty',
    noOfItemsToDisplay: 2,
    editable: true
})
]

const emptyCardViewTextItem = [new CardViewTextItemModel({
    label: 'CardView Text Item - Multivalue (chips)',
    value: [],
    key: 'name',
    default: 'default bar',
    multiline: true,
    multivalued: true,
    icon: 'icon',
    editable: true
  })
];

const Template: Story<MycardviewComponent> = (args) => ({
  props: {
    ...args
  }
})

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  inputCopyToClipboardAction: true,
  inputDisplayClearAction: true,
  inputDisplayEmpty: true,
  inputDisplayNoneOption: true,
  inputEditable: true,
  inputProperties: dataSource,
  inputMultiValueSeparator: ',',
  inputUseChipsForMultiValueProperty: true,
}

export const DefaultStoryPropsOff = Template.bind({});
DefaultStoryPropsOff.args = {
  inputCopyToClipboardAction: false,
  inputDisplayClearAction: false,
  inputDisplayEmpty: false,
  inputDisplayNoneOption: false,
  inputEditable: false,
  inputProperties: dataSource,
  inputMultiValueSeparator: ',',
  inputUseChipsForMultiValueProperty: false,
}

export const EmptyCardViewTexItem = Template.bind({});
EmptyCardViewTexItem.args = {
  inputCopyToClipboardAction: true,
  inputDisplayClearAction: true,
  inputDisplayEmpty: true,
  inputDisplayNoneOption: true,
  inputEditable: false,
  inputProperties: emptyCardViewTextItem,
  inputMultiValueSeparator: ',',
  inputUseChipsForMultiValueProperty: false,
}
