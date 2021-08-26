import { CoreModule, MaterialModule, SearchTextStateEnum } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { of } from 'rxjs';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { SearchTextInputComponent } from './search-text-input.component';

export default {
    component: SearchTextInputComponent,
    title: 'Core/Components/Search Text Input',
    decorators: [
        moduleMetadata({
           declarations: [SearchTextInputComponent],
           imports: [
            RouterModule.forRoot(APP_ROUTES, {
              useHash: true,
              enableTracing: false // enable for debug only
            }),
            CoreModule.forRoot(),
            AppCommonModule,
            MaterialModule,
            BrowserAnimationsModule
          ]
        })
    ]
} as Meta;

const Template: Story<SearchTextInputComponent> = (args) => ({
    props: {
      ...args
    }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  autocomplete: false,
  liveSearchEnabled: true,
  inputType: "text",
  searchAutocomplete: false,
  debounceTime: 0,
  searchTerm: "",
  focusListener: of(),
  collapseOnSubmit: false,
  defaultState: SearchTextStateEnum.collapsed,
  collapseOnBlur: false,
  showClearButton: false
};

export const AutoCompleteEnabled = Template.bind({});
AutoCompleteEnabled.args = {
  ...DefaultStory.args,
  autocomplete: true
};
