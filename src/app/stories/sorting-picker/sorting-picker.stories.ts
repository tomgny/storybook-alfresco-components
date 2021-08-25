import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { SortingType } from './models/sorting-type.model';
import { SortingPickerComponent } from './sorting-picker.component';

export default {
  component: SortingPickerComponent,
  title: 'Core/Components/Sorting Picker',
  decorators: [
    moduleMetadata({
      declarations: [SortingPickerComponent],
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

const Template: Story<SortingPickerComponent> = (args) => ({
  props: args
});

const initSortinTypes: Array<SortingType> = [
  { key: 'sortByFirstName', label: 'First Name' },
  { key: 'sortByLastName', label: 'Last Name' },
  { key: 'sortByBirthDate', label: 'Birth Date' }
];

export const Default = Template.bind({});

Default.args = {
  ascending: true,
  options: initSortinTypes
};

export const OptionPreSelected = Template.bind({});

OptionPreSelected.args = {
  ...Default.args,
  selected: 'sortByLastName'
};

export const OptionPreSelectedDescending = Template.bind({});

OptionPreSelectedDescending.args = {
  ...OptionPreSelected.args,
  ascending: false
};

export const EmptyPicker = Template.bind({});

EmptyPicker.args = {
  ...Default.args,
  options: []
};
