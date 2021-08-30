import { ContentModule } from '@alfresco/adf-content-services';
import {
  CardViewArrayItemModel,
  CardViewBoolItemModel,
  CardViewDateItemModel,
  CardViewDatetimeItemModel,
  CardViewIntItemModel,
  CardViewKeyValuePairsItemModel,
  CardViewMapItemModel,
  CardViewSelectItemModel,
  CardViewTextItemModel,
  CoreModule,
  MaterialModule
} from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { of } from 'rxjs';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { CardviewComponent, CardviewModule } from './cardview.component';

export default {
  component: CardviewComponent,
  title: 'Core/Components/Card View',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CardviewModule,
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
  ],
  argTypes: {
    properties: { table: { disable: true } },
    defaultDataSource: { table: { disable: true } },
    logs: { table: { disable: true } },
    onDestroy$: { table: { disable: true } },
    ngOnDestroy: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    onItemChange: { table: { disable: true } },
    respondToCardClick: { table: { disable: true } },
    console: { table: { disable: true } }
  }
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
    value: [
      { name: 'hey', value: 'you' },
      { name: 'hey', value: 'you' }
    ],
    key: 'key-value-pairs',
    editable: true
  }),
  new CardViewSelectItemModel({
    label: 'CardView Select Item',
    value: 'one',
    options$: of([
      { key: 'one', label: 'One' },
      { key: 'two', label: 'Two' }
    ]),
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
];

const valueAndDefaultUndefinedItems = [
  new CardViewTextItemModel({
    label: 'CardView Text Item - Multivalue (chips)',
    value: undefined,
    key: 'name',
    default: undefined,
    multiline: true,
    multivalued: true,
    icon: 'icon',
    editable: true
  }),
  new CardViewDateItemModel({
    label: 'CardView Date Item - Multivalue (chips)',
    value: undefined,
    key: 'date',
    default: undefined,
    format: 'shortDate',
    editable: true,
    multivalued: true
  }),
  new CardViewDatetimeItemModel({
    label: 'CardView Datetime Item - Multivalue (chips)',
    value: undefined,
    key: 'datetime',
    default: undefined,
    format: 'short',
    editable: true,
    multivalued: true
  }),
  new CardViewIntItemModel({
    label: 'CardView Int Item',
    value: undefined,
    key: 'int',
    default: undefined,
    editable: true
  }),
  new CardViewSelectItemModel({
    label: 'CardView Select Item',
    value: undefined,
    options$: of([
      { key: 'one', label: 'One' },
      { key: 'two', label: 'Two' }
    ]),
    key: 'select',
    editable: true
  }),
  new CardViewMapItemModel({
    label: 'My map',
    value: undefined,
    key: 'map',
    default: undefined
  }),
  new CardViewTextItemModel({
    label: 'This is clickable ',
    value: undefined,
    key: 'click',
    default: undefined,
    editable: true,
    clickable: true,
    icon: 'close'
  })
];

const multiValueSeparatorItems = [
  new CardViewTextItemModel({
    label: 'CardView Text Item - Multivalue (chips)',
    value: [],
    key: 'name',
    default: "Type a values with '.' (dot) as separator, ex: 4.5.6",
    multiline: true,
    multivalued: true,
    icon: 'icon',
    editable: true
  })
];

const Template: Story<CardviewComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStoryEnabled = Template.bind({});
DefaultStoryEnabled.args = {
  copyToClipboardAction: true,
  displayClearAction: true,
  displayEmpty: true,
  displayNoneOption: true,
  editable: true,
  properties: dataSource,
  multiValueSeparator: ',',
  useChipsForMultiValueProperty: true
};

export const DefaultStoryDisabled = Template.bind({});
DefaultStoryDisabled.args = {
  copyToClipboardAction: false,
  displayClearAction: false,
  displayEmpty: false,
  displayNoneOption: false,
  editable: false,
  properties: dataSource,
  multiValueSeparator: ',',
  useChipsForMultiValueProperty: false
};

export const DefaultStoryOnlyChipsDisabled = Template.bind({});
DefaultStoryOnlyChipsDisabled.args = {
  copyToClipboardAction: true,
  displayClearAction: true,
  displayEmpty: true,
  displayNoneOption: true,
  editable: true,
  properties: dataSource,
  multiValueSeparator: ',',
  useChipsForMultiValueProperty: false
};

export const DefaultStoryOnlyEditDisabled = Template.bind({});
DefaultStoryOnlyEditDisabled.args = {
  copyToClipboardAction: true,
  displayClearAction: true,
  displayEmpty: true,
  displayNoneOption: true,
  editable: false,
  properties: dataSource,
  multiValueSeparator: ',',
  useChipsForMultiValueProperty: true
};

export const DisplayEmptyItems = Template.bind({});
DisplayEmptyItems.args = {
  editable: false,
  properties: valueAndDefaultUndefinedItems,
  displayEmpty: true
};

export const ValueSeparatorAsDot = Template.bind({});
ValueSeparatorAsDot.args = {
  editable: true,
  properties: multiValueSeparatorItems,
  multiValueSeparator: '.',
  useChipsForMultiValueProperty: false
};
